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
            <img
              alt="altImage"
              src={bottle}
              className="guideListImage-articles"
            />
          </td>
          <td className="guideListTitle-articles">
            <a href="asd">{props.title}</a>
          </td>
        </tr>
      </table>
    </Container>
  );
}

export default ArticleGuide;
