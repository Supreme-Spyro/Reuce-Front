import React, { useEffect } from "react";
import "../../styles/admin.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getArticleDataForHome } from "../../redux/actions/article.action";

import { Container, Row, Table, Col, Spinner } from "react-bootstrap";

export default function ArticlesAdmin() {
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
                        <td>{item.source}</td>
                        <td>{item._id}</td>
                        <td>options</td>
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
