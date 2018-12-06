import {
    ARTICLES_FETCH,
    ARTICLES_FAIL
} from '../../../dataType'

export const getArticles = (text) => async (dispatch) => {
    function onSuccess(success) {
        dispatch({ type: ARTICLES_FETCH, payload: success })
        return success
    }
    function onError(error) {
        dispatch({ type: ARTICLES_FETCH, error })
        return error
    }
    try {
        const URL = `https://api.tvmaze.com/search/shows?q=${text}`
        const res = await fetch(URL, {
            method: 'GET'
        })
        const success = await res.json()
        return onSuccess(success)
    } catch (error) {
        return onError(error)
    }
}
