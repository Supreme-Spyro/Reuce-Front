import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/register.scss";

import { registerActions } from "../redux/actions/user.action";

import signupSide from "../assets/login-door.png";
import reuceLogo from "../assets/reuce-logo.png";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [registerState, setRegisterState] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    address: "",
  });

  const handleChange = (event) => {
    // console.log("event", event);
    setRegisterState({
      ...registerState,
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
            className="border-20 bg-light py-4 text-dark col-right"
            xs={12}
            lg={6}
          >
            <br />
            <div className="mx-sm-4 form-group pb-2">
              <Form
                onSubmit={(event) => {
                  dispatch(registerActions(registerState, event, history));
                }}
              >
                <Row>
                  <NavLink className="mx-auto" to="/">
                    <img className="mx-auto top-logo" src={reuceLogo} alt="" />
                  </NavLink>
                </Row>
                <Form.Group className="mx-auto w-75 nunito" column="sm">
                  <Form.Control
                    required
                    className="my-4"
                    name="fullname"
                    size="sm"
                    type="text"
                    placeholder="Fullname"
                    onChange={(event) => handleChange(event)}
                    value={registerState.fullname}
                  />

                  <Form.Control
                    required
                    className="my-4"
                    name="email"
                    size="sm"
                    type="email"
                    placeholder="Email address"
                    onChange={(event) => handleChange(event)}
                    value={registerState.email}
                  />

                  <Form.Control
                    required
                    className="my-4"
                    name="username"
                    size="sm"
                    type="text"
                    placeholder="Username"
                    onChange={(event) => handleChange(event)}
                    value={registerState.username}
                  />
                  <Form.Control
                    required
                    className="my-4"
                    size="sm"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(event) => handleChange(event)}
                    value={registerState.password}
                  />
                  <Form.Control.Feedback type="valid">
                    Password sesuai
                  </Form.Control.Feedback>

                  <Form.Control
                    required
                    className="my-4"
                    row={4}
                    size="sm"
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={(event) => handleChange(event)}
                    value={registerState.address}
                  />
                  <Form.Text>
                    Sudah punya akun?{" "}
                    <span className="here-link">
                      <NavLink className="here-link" to="/login">
                        Masuk disini
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
                    Daftar
                  </Button>
                </Row>
              </Form>
            </div>
          </Col>
          <Col
            className="bg-light d-xs-none d-sm-none d-md-none d-lg-block m-auto"
            sm={0}
            lg={6}
          >
            <img
              className="img-left image-side d-sm-none d-md-none d-lg-block mx-auto"
              src={signupSide}
              alt=""
            />
          </Col>
          {/* <Col xs={2} lg={2}></Col> */}
          {/* </Row> */}
        </Row>
        <Row className="p-5"></Row>
      </Container>
    </div>
  );
}
