import React, { useEffect } from "react";
import "../../styles/admin.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction } from "../../redux/actions/user.action";

import { Container, Row, Table, Col, Spinner } from "react-bootstrap";

export default function ProductAdmin() {
  const dispatch = useDispatch();

  const productGet = useSelector(
    (state) => state.getProductReducer.data.result
  );
  const productLoading = productGet !== undefined ? true : false;
  const productLength = productGet !== undefined ? productGet.length : null;

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  console.log("productGet", productGet);

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        <div className="popularSection">
          {productLoading ? (
            <div>
              <Row className="sectionTitle">
                <h3>Products: {productLength}</h3>
                <hr />
              </Row>
              <Row>
                <Col xs={12}>
                  <Table hover="true" responsive="lg">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Seller</th>
                        <th>Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productGet.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                          <td>{item.price}</td>
                          <td>{item.category.name}</td>
                          <td>{item.user.username}</td>
                          <td>{item.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          ) : (
            <Row>
              <br />
              <Spinner className="mx-auto" animation="border" variant="info" />
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
}
