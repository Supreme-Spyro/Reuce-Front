import React from "react";

import recycling from "../../assets/recycling.svg";
import { Row, Col } from "react-bootstrap"

const UndifinedHandler = () => {
    return(
        <div style={{marginTop:100}}>
        <Row className="mx-auto px-2 w-100 justify-content-around text-center">
        
          <Col className="mx-auto mb-md-4" xs={10} md={6} lg={4}>
            <img
              style={{ maxHeight: "400px" }}
              width="100%"
              src={recycling}
              alt=""
            />
          </Col>
          
      </Row>
      <Row>
            <h2 className="nunito">Mohon Maaf Produk Sedang Kosong</h2>
      </Row>
        </div>
    )
};

export default UndifinedHandler;