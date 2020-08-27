import {
    FETCH_X_START,
    FETCH_X_SUCCESS,
    FETCH_X_FAILURE
} from '../actions/action.js';

const initialState = {
    x: [],
    error: '',
    isFetching: false,
};

export const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_X_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_X_SUCCESS:
            // console.log(action.payload[0]);
            let randNum = (Math.floor(Math.random() * Math.floor(499)));
            let randResQ = action.payload[randNum].en;
            let randResA = action.payload[randNum].author;
            // console.log(action.payload[randNum]);
            let res = (`"${randResQ}" - ${randResA}`);
            console.log(res);
            return {
                ...state,
                error: '',
                isFetching: false,
                x: res
            }
        case FETCH_X_FAILURE:
            return { 
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}