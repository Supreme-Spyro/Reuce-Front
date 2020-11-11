import React, { useEffect, useState } from "react";
import "../../styles/admin.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction } from "../../redux/actions/user.action";
import { getAllProductActions } from "../../redux/actions/product.action";

import { Container, Row, Col, Spinner } from "react-bootstrap";

export default function Admin() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer.data.result);
  const productData = useSelector(
    (state) => state.getProductReducer.data.result
  );

  useEffect(() => {
    dispatch(getAllUserAction());
    dispatch(getAllProductActions());
  }, [dispatch]);

  // const [adminData, setAdminData] = useState({
  //   user: null,
  //   product: null,
  // });

  // useEffect(() => {
  //   if (userData === undefined && productData === undefined) {
  //     dispatch(getAllUserAction());
  //     dispatch(getAllProductActions());
  //   } else {
  //     setAdminData({
  //       user: userData,
  //       product: productData,
  //     });
  //   }
  // }, [dispatch, adminData, userData, productData]);

  // console.log(adminData, "adminData");

  // useEffect(() => {
  //   dispatch(getAllProductActions());
  // }, [dispatch]);

  // let adminData = {
  //   user: null,
  //   product: null,
  // };

  // let adminData = userData ===undefined && productData=== undefined ?
  // ({
  //      user: "",
  //       product: ""
  //     }) :
  //   ( {
  //     user: userData.length,
  //     product: productData.length,
  //   })
 
  

  // console.log("userData", userData);
  // console.log("productData", productData);

  return (
    <div>
      <br />
      <br />
      <br />
      {/* <Container>
        {adminData ? (
          <div className="popularSection">
            <Row className="sectionTitle">
              <h3>Admin homepage</h3>
              <br />
              <h5>Users: {adminData.user}</h5>
              <br />
              <h5>Product: {adminData.product}</h5>
            </Row>
          </div>
        ) : (
          <Row>
            <br />
            <Spinner className="mx-auto" animation="border" variant="info" />
          </Row>
        )}
      </Container> */}
    </div>
  );
}
