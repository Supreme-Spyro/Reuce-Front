import axios from 'axios'
import { GET_DATA_FAILED } from './user.action'

export const GET_ARTICLE_DATA = 'GET_ARTICLE_DATA'
export const GET_ARTICLE_DATA_SUCCESS = 'GET_ARTICLE_DATA_SUCCESS'
export const GET_ARTICLE_DATA_FAILED= 'GET_ARTICLE_DATA_FAILED'
export const GET_ARTICLE_DATA_BY_ID = 'GET_ARTICLE_DATA_BY_ID'
export const GET_ARTICLE_DATA_BY_ID_SUCCESS = 'GET_ARTICLE_DATA_BY_ID_SUCCESS'
export const GET_ARTICLE_DATA_BY_ID_FAILED = 'GET_ARTICLE_DATA_BY_ID_FAILED'


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

export const getArticleDataById = () =>{
    return {
        type : GET_ARTICLE_DATA,
    }
}

export const getArticleDataByIdSuccess = (value) =>{
    return {
        type : GET_ARTICLE_DATA,
        payload: value,
    }
}

export const getArticleDataByIdFailed = (error) =>{
    return {
        type : GET_ARTICLE_DATA,
        error,
    }
}

export const getArticleDataForHome = (data) => (dispatch) => {
    console.log('article data', data);
    const uriArticle = 'https://reuce-back.herokuapp.com/artikel';
    axios
    .get(`${uriArticle}`)
    .then((result)=> dispatch(getArticleDataSuccess(result.data)))
    .catch((error)=> dispatch(getArticleDataFailed(error)))
}


export const getArticleDataForHome = (event, id, value, history) => (dispatch) => {
    event.preventDefault()
    console.log('article data', data);
    const uriArticle = 'https://reuce-back.herokuapp.com/artikel';
    axios
    .get(`${uriArticle}`)
    .then((result)=> dispatch(getArticleDataByIdSuccess(result.data)))
    .catch((error)=> dispatch(getArticleDataByIdFailed(error)))
}


