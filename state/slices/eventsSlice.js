import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Backend } from "../../network/Connections";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { calcDistance } from "../../helper/Distance";
import * as Location from 'expo-location';

function arrayContainsArray (superset, subset) {
    return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
    });
}

export const fetchByCity = createAsyncThunk(
    'events/fetchByCity',
    async (payload, { dispatch, rejectWithValue, getState }) => {
        try {
            const { status, statusText, data } = await Backend.post('/get_events_by_city.php', { city: payload});
            // console.log(getState(), status, statusText, data);
            if (status == 200 && data.error == false) {
                data.events.forEach(event => {
                    event.tags = event.tags.length > 0 ? event.tags.split(',') : [];
                    event.dateString = format(Date.parse(event.date), 'd. MMMM', {locale: de});
                });
                dispatch(updateRaw(data.events));
                dispatch(applyFilter());
            }
            if (data.error) {
                return rejectWithValue(data.message);
            }
            return { status, statusText, data };
        } catch (err) {
            console.log('Error while fetching: ', err, err.response);
            if (!err.response) {
                throw err
            }
            const rejectValue = err.response.data.message ? err.response.data.message : err.response.statusText;
            return rejectWithValue(rejectValue);
        }
    }
);

export const fetchByGPS = createAsyncThunk(
    'events/fetchByGPS',
    async (payload, { dispatch, rejectWithValue, getState }) => {
        try {
            const geoPermission = await Location.requestPermissionsAsync();
            if (!geoPermission.status || geoPermission.status != "granted" ) {
                return rejectWithValue({ locationErr: true });
            }
            const { coords } = await Location.getCurrentPositionAsync();
            dispatch(updateUserPos({ latitude: coords.latitude, longitude: coords.longitude}));
            const { status, statusText, data } = await Backend.post('/get_events_by_pos.php', { latitude: coords.latitude, longitude: coords.longitude, distance: 60 });
            // console.log(getState(), status, statusText, data);
            if (status == 200 && data.error == false) {
                data.events.forEach(event => {
                    event.tags = event.tags.length > 0 ? event.tags.split(',') : [];
                    event.dateString = format(Date.parse(event.date), 'd. MMMM', {locale: de});
                });
                dispatch(updateRaw(data.events));
                dispatch(applyFilter());
            }
            if (data.error) {
                return rejectWithValue(data.message);
            }
            return { status, statusText, data };
        } catch (err) {
            console.log('Error while fetching: ', err, err.response);
            if (!err.response) {
                throw err
            }
            const rejectValue = err.response.data.message ? err.response.data.message : err.response.statusText;
            return rejectWithValue(rejectValue);
        }
    }
);

export const fetchForMap = createAsyncThunk(
    'events/fetchForMap',
    async (payload, { dispatch, rejectWithValue, getState }) => {
        try {
            const { status, statusText, data } = await Backend.post('/get_events_by_pos.php', { latitude: payload.latitude, longitude: payload.longitude, distance: 60 });
            if (status == 200 && data.error == false) {
                data.events.forEach(event => {
                    event.tags = event.tags.length > 0 ? event.tags.split(',') : [];
                    event.dateString = format(Date.parse(event.date), 'd. MMMM', {locale: de});
                });
                dispatch(updateMapPos({ latitude: payload.latitude, longitude: payload.longitude }));
                return { status, statusText, data };
            }
            if (data.error) {
                return rejectWithValue(data.message);
            }
            return { status, statusText, data };
        } catch (err) {
            console.log('Error while fetching: ', err, err.response);
            if (!err.response) {
                throw err
            }
            const rejectValue = err.response.data.message ? err.response.data.message : err.response.statusText;
            return rejectWithValue(rejectValue);
        }
    }
);

export const applyFilter = createAsyncThunk(
    'events/applyFilter',
    (payload, { dispatch, rejectWithValue, getState }) => {
        const state = getState();
        let rawEvents = state.events.raw;
        let filter = [];
        state.ui.tags.forEach(tag => {
            if (tag.activated) {
                filter.push(tag.text);
            }
        });
        if (!state.ui.city) {
            rawEvents = state.events.raw.map((oldEvent) => {
                let newEvent = {};
                newEvent = { ...oldEvent};
                newEvent.distance = calcDistance(state.events.userPos, { latitude: oldEvent.latitude, longitude: oldEvent.longitude });
                return newEvent
            });
            rawEvents = rawEvents.filter(event => event.distance <= state.ui.distance);
        }
        // filter
        const filtered = rawEvents.filter(event => arrayContainsArray(event.tags, filter));
        if (filtered.length == 0) {
            return ([{ date: 'Keine Suchergebnisse', data: [] }]);
        }
        // Create categories for SectionList
        let eventsList = [];
        filtered.forEach(event => {
            const index = eventsList.findIndex(el => el.date == event.dateString);
            if (index >= 0) {
                eventsList[index].data.push(event);
            } else {
                eventsList.push({date: event.dateString, data: [event]});
            }
        });
        return eventsList;
    }
);

const initialState = {
    userPos: {
        latitude: 52.519806,
        longitude: 13.405167,
    },
    fetching: false,
    lastFetch: null,
    lastMapPos: {
        latitude: null,
        longitude: null,
    },
    map: [],
    filtered: [],
    raw: [],
    favourites: [],
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        updateRaw: (state, action) => {
            state.raw = action.payload;
        },
        updateFiltered: (state, action) => {
            state.filtered = action.payload;
        },
        updateMapPos: (state, action) => {
            state.lastMapPos = action.payload;
        },
        toogleFavourite: (state, action) => {
            state.favourites = state.favourites.filter((e) => new Date(e.date) >= Date.now());
            if (state.favourites.filter((e) => e.id == action.payload.id).length) {
                state.favourites = state.favourites.filter((e) => e.id != action.payload.id)
            } else {
                state.favourites.push(action.payload);
                state.favourites.sort((a, b) => new Date(a.date) - new Date(b.date));
            }
        },
        updateUserPos: (state, action) => {
            state.userPos = action.payload;
        },
        resetEvents: (state, action) => {
            state.userPos = {
                latitude: null,
                longitude: null,
            };
            state.fetching = false;
            state.lastFetch = null;
            state.lastMapPos = {
                latitude: null,
                longitude: null,
            };
            state.map = [];
            state.filtered = [];
            state.raw = [];
            state.favourites = [];
        },
    },
    extraReducers: {
        [fetchByCity.pending]: (state, action) => {
            state.fetching = true;
            state.filtered = [];
        },
        [fetchByCity.rejected]: (state, action) => {
            state.fetching = false;
            if (!action.payload) {
                state.filtered = ([{ date: 'Offline', data: [] }]);
            } else {
                state.filtered = ([{ date: 'Fehler', data: [{ title: action.payload }] }]);
            }
        },
        [fetchByCity.fulfilled]: (state, action) => {
            state.fetching = false;
            state.lastFetch = Date.now();
        },

        [fetchByGPS.pending]: (state, action) => {
            state.fetching = true;
            state.filtered = [];
        },
        [fetchByGPS.rejected]: (state, action) => {
            state.fetching = false;
            if (!action.payload) {
                state.filtered = ([{ date: 'Offline', data: [] }]);
            } else if (action.payload.locationErr) {
                state.filtered = ([{ date: 'Standortzugriff verweigert', data: [] }]);
            } else {
                state.filtered = ([{ date: 'Fehler: ' + action.payload, data: [{ title: action.payload }] }]);
            }
        },
        [fetchByGPS.fulfilled]: (state, action) => {
            state.fetching = false;
            state.lastFetch = Date.now();
        },

        [fetchForMap.pending]: (state, action) => {
            state.fetching = true;
        },
        [fetchForMap.rejected]: (state, action) => {
            state.fetching = false;
            if (!action.payload) {
                // offline
            } else {
                // anderer Fehler
            }
        },
        [fetchForMap.fulfilled]: (state, action) => {
            state.fetching = false;
            state.map = action.payload.data.events;
        },

        [applyFilter.fulfilled]: (state, action) => {
            state.filtered = action.payload;
        }
    }
});

export const { updateRaw, toogleFavourite, resetEvents, updateMapPos, updateUserPos } = eventsSlice.actions;

export default eventsSlice.reducer;