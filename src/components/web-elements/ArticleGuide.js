import React from "react";
import bottle from "../../assets/plastic-bottle.jpg";
import "../../styles/ArticleGuide.css";
import { Container } from "react-bootstrap";
function ArticleGuide(props) {
  return (
    <Container>
      <table>
        <tr>
          <td>
            <img src={bottle} className="guideListImage-articles" />
          </td>
          <td className="guideListTitle-articles">
            <a href="asd">How to Appropriately Determine your Plastic Price?</a>
          </td>
        </tr>
      </table>
    </Container>
  );
}

export default ArticleGuide;
