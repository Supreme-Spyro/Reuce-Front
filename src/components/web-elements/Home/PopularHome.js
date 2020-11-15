import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Row, Spinner, Col } from "react-bootstrap";

import "../../../styles/Font.scss";
import "../../../styles/popularHome.scss";

import { getCategoryId } from "../../../redux/actions/category.action";

import placeholder from "../../../assets/placeholder.jpg";
import trashSack from "../../../assets/trash-sack.jpg";
import ProductCard from "./ProductCardHome";

export default function PopularHome() {
  const dispatch = useDispatch();

  const id = "5fb0a4b244fea22a0ce687b4";

  const dataCategory = useSelector(
    (state) => state.getCategoryReducer.data.Categories.product
  );
  // console.log("dataCategory", dataCategory);

  // const [categoryState, setCategoryState] = useState({
  //   image: "",
  //   name: "",
  //   price: "",
  //   role: "",
  // });

  // useEffect(() => {
  //   if (dataCategory === undefined) {
  //     dispatch(getCategoryId(id));
  //   } else {
  //     setCategoryState({
  //       ...categoryState,
  //     });
  //   }
  // }, [dispatch, dataCategory, id]);

  useEffect(() => {
    dispatch(getCategoryId(id));
  }, [dispatch, id]);

  return dataCategory ? (
    dataCategory.map((item, index) => (
      <Col
        className="colStyle align-item-center justify-content-center"
        xs={8}
        sm={8}
        md={3}
        key={index}
      >
        <Link to={`/product/${item._id}`}>
          <ProductCard
            imageSource={
              `http://reuce-back.herokuapp.com/${item.image}` || placeholder
            }
            title={item.name}
            text={`Rp ${item.price}`}
            productRole={item.role}
          />
        </Link>
      </Col>
    ))
  ) : (
    <Row className="justify-content-center text-center">
      <br />
      <br />
      <Spinner className="mx-auto" animation="border" variant="info" />
    </Row>
  );
}
