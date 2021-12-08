import { FETCH_JOKE_LOADING, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAIL} from '../actions'

const initialState = {
    joke: "This is a joke",
    isFetching: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_JOKE_LOADING):
            return({
                ...state,
                isFetching: true
            });
        case(FETCH_JOKE_SUCCESS):
            return({
                ...state,
                joke: action.payload,
                isFetching: false
            });
        case(FETCH_JOKE_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })

        
        default: 
            return state
    }
}

export default reducer;