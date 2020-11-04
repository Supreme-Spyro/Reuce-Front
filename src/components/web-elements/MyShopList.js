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
            <div className='productName-MyShopList'>Botol Pelastik Bekas</div>
            <table className='table-MyShopList'>
                <tr>
                    <td className='tdTable-MyShopList'>
                        Satuan Produk
                    </td>
                    <td>
                        Kg
                    </td>
                </tr>
                <tr>
                    <td className='tdTable-MyShopList'>
                        Harga per satuan
                    </td>
                    <td>
                        Rp. 7000,- /kg
                    </td>
                </tr>
                <tr>
                    <td className='tdTable-MyShopList'>
                        Alamat Pengiriman
                    </td>
                    <td>
                        Jl. Mangga, Bekasi
                    </td>
                </tr>
            </table>
            

            <Button className='buttonEdit-MyShopList' variant='success'>Edit item</Button>
            <Button className='buttonSoldOut-MyShopList' variant='danger'>Item Sold Out</Button>
            
        </Col>
      </Row>
    </div>
  );
}

export default MyShopList;
