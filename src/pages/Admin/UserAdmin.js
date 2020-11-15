import React, { useEffect } from "react";
import "../../styles/admin.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction } from "../../redux/actions/user.action";

import { Container, Row, Table, Col, Spinner } from "react-bootstrap";

export default function UserAdmin() {
  const dispatch = useDispatch();

  const userGet = useSelector((state) => state.userReducer.data.result);
  const userLoading = userGet !== undefined ? true : false;
  const userLength = userGet !== undefined ? userGet.length : null;

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  // console.log("userData", userGet);

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        <div className="popularSection">
          {userLoading ? (
            <div>
              <Row className="sectionTitle">
                <h3>Users: {userLength}</h3>
                <hr />
              </Row>
              <Row>
                <Col xs={12}>
                  <Table hover="true" responsive="lg">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Role</th>
                        <th>Fullname</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Address</th>
                        <th>Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userGet.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.role}</td>
                          <td>{item.fullname}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.address}</td>
                          <td>{item.product.length}</td>
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
