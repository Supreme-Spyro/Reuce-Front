import axios from 'axios'

export const GET_ARTICLE_DATA = 'GET_ARTICLE_DATA'
export const GET_ARTICLE_DATA_SUCCESS = 'GET_ARTICLE_DATA_SUCCESS'
export const GET_ARTICLE_DATA_FAILED= 'GET_ARTICLE_DATA_FAILED'


export const getArticleData = () =>{
    return {
        type : GET_ARTICLE_DATA,
    }
}

export const getArticleDataSuccess = (value) =>{
    return {
        type : GET_ARTICLE_DATA_SUCCESS,
        payload: value,
    }
}

export const getArticleDataFailed = (error) =>{
    return {
        type : GET_ARTICLE_DATA_FAILED,
        error,
    }
}



export const getArticleDataForHome = (data) => (dispatch) => {
    console.log('article data', data);
    const uriArticle = 'https://reuce-back.herokuapp.com/artikel';
    return axios
    .get(`${uriArticle}`)
    .then((result)=>{
        console.log('res',result);
        dispatch(getArticleDataSuccess(result))
    })
    .catch((error)=> dispatch(getArticleDataFailed(error)))
}




