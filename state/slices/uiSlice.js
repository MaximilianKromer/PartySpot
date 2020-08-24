import { createSlice } from "@reduxjs/toolkit";


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
        setDistance: (state, action) => {
            state.distance = action.payload;
            state.city = '';
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        toogleTag: (state, payload) => {
            state.tags[payload.payload].activated = state.tags[payload.payload].activated ? false : true;
        }
    }
});

export const { openPopup, closePopup, setDistance, setCity, toogleTag } = uiSlice.actions;

export default uiSlice.reducer;