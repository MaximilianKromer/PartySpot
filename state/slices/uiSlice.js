import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { applyFilter, fetchByCity, fetchByGPS } from "./eventsSlice";

export const toogleTag = createAsyncThunk(
    'ui/toogleTag', 
    (payload, { dispatch, rejectWithValue, getState }) => {
        dispatch(toogleTagState(payload));
        dispatch(applyFilter());
        return payload;
    });

export const setCity = createAsyncThunk(
    'ui/setCity',
    (payload, { dispatch, rejectWithValue, getState }) => {
        if ( !(getState().events.fetching)) {
            dispatch(setCityState(payload));
            dispatch(fetchByCity(payload));
        }

    }
);

export const setDistance = createAsyncThunk(
    'ui/setDistance',
    (payload, { dispatch, rejectWithValue, getState }) => {
        if ( !(getState().events.fetching)) {
            dispatch(setDistanceState(payload));

            if (getState().ui.city) {
                // Von Stadt zu Distanz gewechselt
                dispatch(setCityState(''));
                dispatch(fetchByGPS());
            } else {
                if ((!getState().events.lastFetch || getState().events.lastFetch < Date.now() - 2*60*1000)) {
                    dispatch(fetchByGPS());
                } else {
                    dispatch(applyFilter());
                }
            }
        }

    }
);


const initialState = {
    popupOpened: false,
    city: 'Berlin',
    distance: 25,
    tags: [
        {
            text: 'Ab 16',
            activated: false
        },{
            text: 'Park',
            activated: false
        },{
            text: '4Free',
            activated: false
        },{
            text: 'Festival',
            activated: false
        },{
            text: 'Club',
            activated: false
        },{
            text: 'Blahblah',
            activated: false
        },
    ],
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openPopup: (state, action) => {
            state.popupOpened = true;
        },
        closePopup: state => {
            state.popupOpened = false;
        },
        setDistanceState: (state, action) => {
            state.distance = action.payload;
        },
        setCityState: (state, action) => {
            state.city = action.payload;
        },
        toogleTagState: (state, action) => {
            state.tags[action.payload].activated = state.tags[action.payload].activated ? false : true;
        }
    },
    extraReducers: {
        [toogleTag.fulfilled]: (state, action) => {
            
        }
    }
});

export const { openPopup, closePopup, setDistanceState, setCityState, toogleTagState } = uiSlice.actions;

export default uiSlice.reducer;