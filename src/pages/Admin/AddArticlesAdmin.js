import React, { useState } from "react";
import "../../styles/admin.scss";
import { useHistory } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { postArticleActions } from "../../redux/actions/article.action";

import { Form, Container, Row, Col, Spinner, Button } from "react-bootstrap";

export default function AddArticlesAdmin() {
  const history = useHistory();
  const dispatch = useDispatch();

  //useState
  const [addArticleState, setAddArticleState] = useState({
    title: "",
    content: "",
    image: "",
    source: "",
  });

  const handleChange = (event) => {
    setAddArticleState({
      ...addArticleState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        <div className="popularSection mx-3">
          <Row>
            <h4>Add Article</h4>
          </Row>
          <hr />
          <Row className="px-4">
            <Form
              // action="/article"
              // encType="multipart/form-data"
              // method="post"
              autoComplete="off"
              className="form-profile"
              onSubmit={(event) => {
                dispatch(postArticleActions(addArticleState, event, history));
              }}
            >
              <Form.Group controlId="" as={Row}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={(event) => handleChange(event)}
                  value={addArticleState.title}
                />
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  onChange={(event) => handleChange(event)}
                  value={addArticleState.image}
                />
                <Form.Label>Source</Form.Label>
                <Form.Control
                  type="text"
                  name="source"
                  onChange={(event) => handleChange(event)}
                  value={addArticleState.source}
                />
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="content"
                  onChange={(event) => handleChange(event)}
                  value={addArticleState.content}
                />
              </Form.Group>

              <Row>
                <Button
                  type="submit"
                  className="montserrat text-light saveChangeButton-profile"
                >
                  Create
                </Button>
              </Row>
            </Form>
          </Row>
        </div>
      </Container>
    </div>
  );
}
