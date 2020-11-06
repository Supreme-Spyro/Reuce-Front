import React, {useState} from 'react';
import { Container, Form, Button, Row, Col, Spinner } from "react-bootstrap";
import plasticBottle from '../assets/plastic-bottle.jpg'
import NavbarBootstrap from '../components/web-elements/NavbarBootstrap'

import '../styles/ProductDetails.scss'

export default function ProductDetails() {
  let [num, setNum] = useState(0);

  const increment = () => {
    setNum((num + 1));
  };

  const decrement = () => {
    if (num < 0) {
      return 0;
    } else if (num > 0) {
      setNum((num - 1));
    }
  };

  return (
    <div>
      <NavbarBootstrap/>
      <br/>
      <br/>
      <Row>
            <Col sm={0} md={2}></Col>
            <Col className="my-4 ml-sm-5" sm={10} md={4}>
              <img
                src={plasticBottle}
                width={200}
                height={200}
              />
              <br/>
              <br/>
               <Row>
              <div>
                  <h3>Detail Produk</h3>
                  <p>
                    Grade: A
                  </p>
                  <p>
                    Categories: botol plastik
                  </p>
                <p>Conditon: Bersih</p>
                <p>Weight: 1kg</p>
                </div>
            </Row>
            </Col>
            <Col className="my-4 ml-sm-5" sm={10} md={4}>
            <Row>
                <h3>Botol Plastik</h3>
              </Row>
              <Row>
                <p>
                  Botol plastik bekas
                </p>
              </Row>
              <Row>
              <strong>
                  <h3>Rp 2.000</h3>
                </strong>
              </Row>
                <div className="container-counter-quantity">
                  <Button
                    onClick={() => decrement()}
                    className="button"
                    variant="secondary"
                  >
                     -
                  </Button>
                  <p className="num">{num}</p>
                  <Button
                    onClick={() => increment()}
                    className="button"
                    variant="secondary"
                  >
                      +
                  </Button>
                  </div>
                  <Row>
                  <Button
                  className="addtocart"
                  variant="success"
                  type="submit"
                >
                  <strong>Add to Cart</strong>
                </Button>
                  </Row>
                
                
            </Col>
            
            <Col sm={0} md={2}></Col>
      </Row>   
    </div>
  )
}

