import React, { useState, useEffect } from "react";
import "../../styles/admin.scss";
import { useHistory, useParams } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateArticleActions } from "../../redux/actions/article.action";
import { getArticleDataByIdForPage } from "../../redux/actions/getArticleDataById.action";

import { Form, Container, Row, Spinner, Button } from "react-bootstrap";

export default function EditArticlesAdmin() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  //get data from reducer
  const articleData = useSelector(
    (state) => state.articleDataByIdReducer.data.Artikels
  );
  console.log("articleData", articleData);

  //useState
  const [editArticleState, setEditArticleState] = useState({
    title: "",
    content: "",
    image: "",
    source: "",
  });

  const handleChange = (event) => {
    setEditArticleState({
      ...editArticleState,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (articleData === undefined) {
      dispatch(getArticleDataByIdForPage(id));
    } else {
      setEditArticleState({
        ...articleData,
      });
    }
  }, [dispatch, articleData, id]);

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        <div className="popularSection mx-3">
          {articleData === undefined ? (
            <div className="mx-auto ">
              <Spinner className="mx-auto " animation="border" variant="info" />
            </div>
          ) : (
            <div>
              <Row>
                <h4>Edit Article</h4>
              </Row>
              <hr />
              <Row className="px-4">
                <Form
                  autoComplete="off"
                  className="form-profile"
                  onSubmit={(event) => {
                    dispatch(
                      updateArticleActions(editArticleState, event, history, id)
                    );
                  }}
                >
                  <Form.Group controlId="" as={Row}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      onChange={(event) => handleChange(event)}
                      value={editArticleState.title}
                    />
                    <br />
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      name="image"
                      onChange={(event) => handleChange(event)}
                      value={editArticleState.image}
                    />
                    <br />
                    <Form.Label>Source</Form.Label>
                    <Form.Control
                      type="text"
                      name="source"
                      onChange={(event) => handleChange(event)}
                      value={editArticleState.source}
                    />
                    <br />
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                      rows="20"
                      as="textarea"
                      type="text"
                      name="content"
                      onChange={(event) => handleChange(event)}
                      value={editArticleState.content}
                    />
                  </Form.Group>

                  <Row>
                    <Button
                      variant="warning"
                      type="submit"
                      className="nunito text-dark"
                    >
                      Submit
                    </Button>
                  </Row>
                </Form>
              </Row>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
