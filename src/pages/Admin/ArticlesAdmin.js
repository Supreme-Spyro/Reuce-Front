import React, { useEffect } from "react";
import "../../styles/admin.scss";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getArticleDataForHome } from "../../redux/actions/article.action";
import { deleteArticleActions } from "../../redux/actions/article.action";

import { Container, Row, Table, Col, Spinner, Button } from "react-bootstrap";
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
                            <PencilSquare size={23}/>
                          </Button>
                          <Button
                            onClick={(event) => {
                              dispatch(
                                deleteArticleActions(item._id, event, history)
                              );
                            }}
                            variant="danger"
                          >
                            X
                          </Button>
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
