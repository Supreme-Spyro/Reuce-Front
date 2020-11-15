import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import "../../styles/MyShopList.css";


function MyShopList(props) {
    const history = useHistory()
  return (
    <div className="MyShopListContainer montserrat">
      <Row>
        <Col lg={4}>
          <img alt="" className="ListImage-MyShopList" src={`http://reuce-back.herokuapp.com/${props.image}`} />
        </Col>
        <Col lg={8}>
            <Row>
            <div className='productName-MyShopList'>{props.name}</div>
            <table className='table-MyShopList'>
                <tr>
                    <td className='tdTable-MyShopList'>
                        Berat produk
                    </td>
                    <td>
                        {props.weight} Kg
                    </td>
                </tr>
                <tr>
                    <td className='tdTable-MyShopList'>
                        Harga
                    </td>
                    <td>
                        Rp {props.price}
                    </td>
                </tr>
                <tr>
                    <td className='tdTable-MyShopList'>
                        Deskripsi produk :
                    </td>
                    <td className='tdTable-MyShopList'>
         
                    </td>
                </tr>
                <tr className='trTable-MyShopList'>
                
                {props.description}
                </tr>
            </table>

            </Row>
            <Row>
            <Button className='buttonEdit-MyShopList' variant='success' onClick={()=>history.push(`/myshop/${props.id}/edititem`)}>Edit item</Button>
            <Button className='buttonSoldOut-MyShopList' variant='danger'>Item Sold Out</Button>
            </Row>
            
        </Col>
      </Row>
    </div>
  );
}

export default MyShopList;
