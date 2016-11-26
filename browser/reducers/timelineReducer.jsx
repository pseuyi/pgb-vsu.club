import { combineReducers } from 'redux';
import initialState from './initialState'

const ADD_MY_OBJECT = 'ADD_MY_OBJECT';
const PLAY = 'PLAY'
const SAMPLE_BRUSH = 'CHECKOUT_BRUSH'
const CLEAR_BRUSH = 'CLEAR_BRUSH'
const NEW_COORDS = 'NEW_COORDS'
const CLEAR_TIMELINE = 'CLEAR_TIMELINE'
const EDIT = 'EDIT'
const STOP_EDITING = 'STOP_EDITING'

export const addObject = (myObject) => ({
  type: ADD_MY_OBJECT,
  myObject
})
export const play = () => ({
	type: PLAY
})
export const setBrush = (data) => ({
    type: SAMPLE_BRUSH,
    data
})

export const startEditing = () => ({
    type: EDIT
})

export const stopEditing = () => ({
    type: STOP_EDITING
})

export const clearTimeline = () => ({
    type: CLEAR_TIMELINE
})


// export const newCoords = (coords) => ({
//     type: NEW_COORDS, 
//     coords
// })

// export const newObjCoords = (state = null, action) => {
//     switch(action.type){
//         case NEW_COORDS: return action.coords
//         default: return state;
//     }
// }


export const isPlaying = (state = false, action) => {
    switch(action.type){
        case PLAY:
        	return true;
        default: return state;
    }
}

export const events = (state = [], action) => {
    
    switch(action.type){
        case ADD_MY_OBJECT:
            return state.concat(action.myObject);
        case CLEAR_TIMELINE: {
            console.log("CLEARTIMELINE")
            return [];
        }
        default: return state;
    }
}

export const sampleBrush = (state = null, action) => {
    console.log("SAMPLEBRUSH", action.data)
    switch(action.type){
        case SAMPLE_BRUSH: return action.data;
        default: return state
    }
}

export const edit = (state = false, action) => {
    switch(action.type){
        case EDIT: return true;
        case STOP_EDITING: return false;
        default: return state;
    }
}


// export default combineReducers({
// 	isPlaying,
// 	events,
//     sampleBrush
// });


// export default function artists (state = initialArtists, action) {
//   switch (action.type) {
//     case RECEIVE_ARTISTS: return action.artists;
//     default: return state;
//   }
// }