import axios from "axios";

export const FETCH_JOKE_LOADING = "FETCH_JOKE_LOADING";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";

export const getJoke = () => {
    return dispatch =>{
        dispatch({type: FETCH_JOKE_LOADING});

        axios
            .get("https://v2.jokeapi.dev/joke/Programming?type=single")
            .then(res => {
                dispatch({type: FETCH_JOKE_SUCCESS, payload: res.data.joke})
            })
            .catch(error => {
                dispatch({type: FETCH_JOKE_FAIL, payload: alert("Well this isn't funny! 😦  We couldn't find a joke!")})
            })
    }
   
}

export const fetchJokeLoading = () => {
    return({type: FETCH_JOKE_LOADING})
}

export const fetchJokeSuccess = (joke) => {
    return({type: FETCH_JOKE_SUCCESS, payload: joke})
}

export const fetchJokeFail = (error) => {
    return({type: FETCH_JOKE_FAIL, payload: error})
}