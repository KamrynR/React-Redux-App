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
            let randResQ = action.payload[Math.floor(Math.random() * Math.floor(499))].en;
            let randResA = action.payload[Math.floor(Math.random() * Math.floor(499))].author;
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

export default reducer;