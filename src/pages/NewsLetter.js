import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

//styling
import '../styles/NewsLetter.css'

function NewsLetter() {
    return (
        <Container className='container-newsletter'>
            <Row>
                This will be news letter banner
            </Row>
            <Row>
                here will be the place for the title
            </Row>
            <Row>
                Here will be the place for the content
            </Row>
            <Row>
                Here will be the place for the author info
            </Row>
            <Row>
                Here will be the place for navigation button (next article)
            </Row>
        </Container>
    )
}

export default NewsLetter
