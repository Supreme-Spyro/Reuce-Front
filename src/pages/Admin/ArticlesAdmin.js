import React, { useEffect, useState } from "react";
import "../../styles/admin.scss";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getArticleDataForHome } from "../../redux/actions/article.action";
import { deleteArticleActions } from "../../redux/actions/article.action";

import {
  Modal,
  Container,
  Row,
  Table,
  Col,
  Spinner,
  Button,
} from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";

export default function ArticlesAdmin() {
  const history = useHistory();
  const dispatch = useDispatch();

  const articleGet = useSelector(
    (state) => state.articleDataReducer.data.result
  );
  const articleLoading = articleGet !== undefined ? true : false;
  const articleLength = articleGet !== undefined ? articleGet.length : null;

  useEffect(() => {
    dispatch(getArticleDataForHome());
  }, [dispatch]);

  console.log("userData", articleGet);

  // delete modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <br />
      <br />
      <br />
      {/* <Container> */}
      <div className="popularSection mx-3">
        {articleLoading ? (
          <div>
            <Row>
              <Button
                onClick={() => {
                  history.push(`/admin/articles/add`);
                }}
                variant="info"
                className="ml-2 montserrat"
              >
                <strong>+ Article</strong>
              </Button>
            </Row>
            <br />
            <Row className="sectionTitle">
              <h3>Article: {articleLength}</h3>
              <hr />
            </Row>
            <Row>
              <Col xs={12}>
                <Table responsive hover="true">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Content Length</th>
                      <th>Source</th>
                      <th>Id</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articleGet.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.content.length}</td>
                        <td>{item.source}</td>
                        <td>{item._id}</td>
                        <td>
                          <Button
                            className="px-2 m-0"
                            onClick={() => {
                              window.location.href = `/admin/articles/edit/${item._id}`;
                              //   history.push(`/admin/articles/edit/${item._id}`);
                            }}
                            variant="warning"
                          >
                            <PencilSquare size={23} />
                          </Button>
                          <Button onClick={handleShow} variant="danger">
                            X
                          </Button>
                          <Modal
                            // className="w-50"
                            // style={{
                            //   position: "fixed",
                            //   left: "25%",
                            //   top: "25%",
                            // }}
                            centered
                            show={show}
                            onHide={handleClose}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Delete Article</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Are you sure to delete article?{" "}
                              {/* <strong>{item.title}?</strong> */}
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button
                                variant="danger"
                                onClick={(event) => {
                                  dispatch(
                                    deleteArticleActions(
                                      item._id,
                                      event,
                                      history
                                    )
                                  );
                                }}
                              >
                                Delete
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
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
      {/* </Container> */}
    </div>
  );
}
