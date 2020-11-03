import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import '../../styles/NewsTabList.css'
import TabListExample from '../../assets/carousel-test2.png'
import TabListExample2 from '../../assets/carousel-test1.png'


function NewsTabList() {
    return (
        <Container className='NewsTabList-articles'>
            <Row>
                <Col lg={4}>
                <img 
                src = {TabListExample}
                className='tabListImage-articles'
                />
                </Col >
                <Col lg={8}>
                <Container className='tabListDateRelease-articles'>
                    Tips on November, 1st 2020
                </Container>
                <Container className='tabListNewsTitle-articles'>
                    Tips Mengelola Sampah Plastik di Rumah Agar Tidak Menumpuk
                </Container>
                <Container className='tabListPharagraphReview-articles'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ...
                </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default NewsTabList
