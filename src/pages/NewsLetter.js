import React, { useEffect } from 'react'
import { Container, Row, Carousel, Col } from 'react-bootstrap'
import {useParams} from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import {getArticleDataByIdForPage} from './../redux/actions/getArticleDataById.action'

//styling
import '../styles/NewsLetter.css'

function NewsLetter() {
    const {id} = useParams();
    const dispatch = useDispatch()
    const articleByIdData = useSelector((state)=> state.articleDataByIdReducer.data.Artikels)
    const authorData = useSelector((state)=> state.articleDataByIdReducer.admin)
    console.log('articleByIdData',articleByIdData)
    console.log('authorData',authorData)


    useEffect(()=>{
        dispatch(getArticleDataByIdForPage(id));
    },[dispatch])

    return (
        <Container className='container-newsletter'>
            <Row>
                <img className='image-newsLetter' src={`http://reuce-back.herokuapp.com/${articleByIdData.image}`}/>
            </Row>
            <Row>
                {articleByIdData.title}
            </Row>
            <Row>
                {articleByIdData.content}
            </Row>
        </Container>
    )
}

export default NewsLetter
