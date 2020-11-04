import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/login.scss";

import { loginActions } from "../redux/actions/user.action";

import signupSide from "../assets/welcome-window.png";
import reuceLogo from "../assets/reuce-logo.png";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginState({
      ...loginState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="outer align-item-center">
      <Container classname="border-20">
        <br />
        <br />
        <br />
        <Row className=" bg-light border-20 inner-box">
          {/* <Col xs={2} lg={2} className="col-left bg-light inner-box"></Col> */}
          <Col
            className="bg-light d-xs-none d-sm-none d-md-none d-lg-block m-auto"
            sm={0}
            lg={6}
          >
            <img
              className=" image-side d-sm-none d-md-none d-lg-block mx-auto"
              src={signupSide}
              alt=""
            />
          </Col>
          <Col
            className="border-20 bg-light  text-dark col-right"
            xs={12}
            lg={6}
          >
            <br />
            <div className="mx-sm-4 form-group pb-2">
              <Form
                onSubmit={(event) => {
                  dispatch(loginActions(loginState, event, history));
                }}
              >
                <Row>
                  <NavLink className="mx-auto" to="/">
                    <img
                      className="mx-auto top-logo mb-2"
                      src={reuceLogo}
                      alt=""
                    />
                  </NavLink>
                </Row>
                <Form.Group className="mx-auto w-75 nunito" column="sm">
                  <Form.Control
                    required
                    className="my-4"
                    name="email"
                    size="sm"
                    type="email"
                    placeholder="Email address"
                    onChange={(event) => handleChange(event)}
                    value={loginState.email}
                  />

                  <Form.Control
                    required
                    className="my-4"
                    size="sm"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(event) => handleChange(event)}
                    value={loginState.password}
                  />

                  <Form.Text>
                    Belum punya akun?{" "}
                    <span className="here-link">
                      <NavLink className="here-link" to="/register">
                        Daftar disini.
                      </NavLink>
                    </span>
                  </Form.Text>
                </Form.Group>
                <Row>
                  <Button
                    className="mt-1 mx-auto montserrat"
                    variant="info"
                    type="submit"
                  >
                    Masuk
                  </Button>
                </Row>
              </Form>
            </div>
          </Col>

          {/* <Col xs={2} lg={2}></Col> */}
          {/* </Row> */}
        </Row>
        <Row className=""></Row>
      </Container>
    </div>
  );
}
