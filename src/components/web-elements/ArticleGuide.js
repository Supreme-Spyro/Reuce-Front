import React from "react";
import bottle from "../../assets/plastic-bottle.jpg";
import { Link, NavLink } from "react-router-dom";
import "../../styles/ArticleGuide.css";
import { Container } from "react-bootstrap";

function ArticleGuide(props) {
  return (
    
      <table>
        <tr>
          <td>
            <img
              alt="altImage"
              src={`http://reuce-back.herokuapp.com/${props.image}`}
              className="guideListImage-articles"
            />
          </td>
          <td className="guideListTitle-articles">
            <Link to={`/articles/${props.id}`}>{props.title}</Link>
          </td>
        </tr>
      </table>
    
  );
}

export default ArticleGuide;
