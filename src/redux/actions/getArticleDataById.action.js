import axios from 'axios'
export const GET_ARTICLE_DATA_BY_ID = 'GET_ARTICLE_DATA_BY_ID'
export const GET_ARTICLE_DATA_BY_ID_SUCCESS = 'GET_ARTICLE_DATA_BY_ID_SUCCESS'
export const GET_ARTICLE_DATA_BY_ID_FAILED = 'GET_ARTICLE_DATA_BY_ID_FAILED'


export const getArticleDataById = () =>{
    return {
        type : GET_ARTICLE_DATA_BY_ID,
    }
}

export const getArticleDataByIdSuccess = (value) =>{
    return {
        type : GET_ARTICLE_DATA_BY_ID_SUCCESS,
        payload: value,
    }
}

export const getArticleDataByIdFailed = (error) =>{
    return {
        type : GET_ARTICLE_DATA_BY_ID_FAILED,
        error,
    }
}

export const getArticleDataByIdForPage = (id,history) => (dispatch) => {
    history.push(`/${id}`)
    const uriArticle = `https://reuce-back.herokuapp.com/artikel/${id}`;
    axios
    .get(`${uriArticle}`)
    .then((result)=> dispatch(getArticleDataByIdSuccess(result.data)))
    .catch((error)=> dispatch(getArticleDataByIdFailed(error)))
}
