export const FETCH_JOKE_LOADING = "FETCH_JOKE_LOADING";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";

export const fetchJokeLoading = () => {
    return({type: FETCH_JOKE_LOADING})
}

export const fetchJokeSuccess = (joke) => {
    return({type: FETCH_JOKE_SUCCESS, payload: joke})
}

export const fetchJokeFail = (error) => {
    return({type: FETCH_JOKE_FAIL, payload: error})
}