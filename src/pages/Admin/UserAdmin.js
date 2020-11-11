import React from "react";
import "../../styles/admin.scss";

import { Container, Row } from "react-bootstrap";

export default function UserAdmin() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        <div className="popularSection">
            <h3>Users</h3>
          <Row className="sectionTitle">
          </Row>
        </div>
      </Container>
    </div>
  );
}
