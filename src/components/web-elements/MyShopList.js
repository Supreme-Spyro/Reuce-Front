import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../../styles/MyShopList.css";

//image testing
import bottle from "../../assets/plastic-bottle.jpg";

function MyShopList() {
  return (
    <div className="MyShopListContainer">
      <Row>
        <Col lg={4}>
          <img className="ListImage-MyShopList" src={bottle} />
        </Col>
        <Col lg={8}>
            <table>
                <tr>
                    
                        Botol Pelastik Bekas Bukan Produk Perancis
                    
                </tr>
                <tr>
                    <td>
                        Satuan Produk
                    </td>
                    <td>
                        Kiloan
                    </td>
                </tr>
                <tr>
                    <td>
                        Harga per satuan
                    </td>
                    <td>
                        Rp. 7000,- /kg
                    </td>
                </tr>
                <tr>
                    <td>
                        Alamat Pengiriman
                    </td>
                    <td>
                        Jl. Mangga, Bekasi
                    </td>
                </tr>
            </table>
            <Row>
                <Col lg={6}>
            <Button variant='success'>Edit item</Button>
                </Col>
                <Col lg={6}>
            <Button variant='danger'>Item Sold Out</Button>
                </Col>
            </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MyShopList;
