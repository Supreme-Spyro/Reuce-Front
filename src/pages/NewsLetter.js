import React from 'react'
import { Container, Row, Carousel, Col } from 'react-bootstrap'

//styling
import '../styles/NewsLetter.css'

function NewsLetter(props) {
    return (
        <Container className='container-newsletter'>
            <Row>
                This will be the Carousel banner
            </Row>
            <Row>
                {props.title}
            </Row>
            <Row>
                {props.content}
            </Row>
        </Container>
    )
}

export default NewsLetter
