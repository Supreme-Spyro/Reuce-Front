import React, { useEffect } from "react";

import { Col } from "react-bootstrap";

import "../../styles/Font.scss";
import "../../styles/popularHome.scss";

import cardboardImg from "../../assets/plastic-bottle.jpg";
import MyShopCard from "../../components/web-elements/MyshopCard";

import { getUserRequestById } from "../../redux/actions/getUserData.action";

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function MyShopCardSection() {

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const userData = useSelector((state) => state.getUserDataReducer.data);
  console.log("data user: ", userData)

  useEffect(() => {
         dispatch(getUserRequestById(id));
    
  }, [dispatch, id]);

  // const dummyPopular = [
  //   {
  //     image: cardboardImg,
  //     title: "Kardus bekas bersih",
  //     text: "Rp 5.000/Kg",
  //     buttonOnclick: ``,
  //     buttonVariant: `success`,
  //     buttonText: `+ Keranjang`,
  //     productRole: "jual",
  //   },
  //   {
  //     image: cardboardImg,
  //     title: "Kardus bekas bersih",
  //     text: "Rp 5.000/Kg",
  //     buttonOnclick: ``,
  //     buttonVariant: `success`,
  //     buttonText: `+ Keranjang`,
  //     productRole: "jual",
  //   },
  //   {
  //     image: cardboardImg,
  //     title: "Kardus bekas bersih",
  //     text: "Rp 5.000/Kg",
  //     buttonOnclick: ``,
  //     buttonVariant: `success`,
  //     buttonText: `+ Keranjang`,
  //     productRole: "jual",
  //   },
  //   {
  //     image: cardboardImg,
  //     title: "Kardus bekas bersih",
  //     text: "Rp 5.000/Kg",
  //     buttonOnclick: ``,
  //     buttonVariant: `success`,
  //     buttonText: `+ Keranjang`,
  //     productRole: "jual",
  //   },
  //   {
  //     image: cardboardImg,
  //     title: "Kardus bekas bersih",
  //     text: "Rp 5.000/Kg",
  //     buttonOnclick: ``,
  //     buttonVariant: `success`,
  //     buttonText: `+ Keranjang`,
  //     productRole: "jual",
  //   },
  //   {
  //     image: cardboardImg,
  //     title: "Kardus bekas bersih",
  //     text: "Rp 5.000/Kg",
  //     buttonOnclick: ``,
  //     buttonVariant: `success`,
  //     buttonText: `+ Keranjang`,
  //     productRole: "jual",
  //   },
  // ];
  return userData.product.map((item, index) => (
    <Col
      className="colStyle align-item-center justify-content-center"
      xs={8}
      sm={8}
      md={3}
      key={index}
    >
      <MyShopCard
        imageSource={ item.image !== undefined ? item.image: cardboardImg}
        title={item.name}
        // text={item.description}
        // buttonOnclick={item.buttonOnclick}
        // buttonText={item.buttonText}
        // variant={item.buttonVariant}
        productRole={item.role}
        id = {item._id}
      />
    </Col>
  ));
}
