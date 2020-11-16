import React from "react";

import reuceLite from "../../assets/reuce-lite.png";

import '../../styles/Footer.scss'

export default function Footer() {
//   const footerStyle = {
//     position: "fixed",
//     bottom: "0",
//     width: "100%",
//     height: "50px",
//     };

//   const footerImg = {
//     height: "50px",
//     width: "50px",
//   };

  return (
    <div  className=" footerStyle text-center bg-light">
      <img className="footerImg" src={reuceLite} alt="" />
      <span className="footerText">&nbsp;© Reuce 2020 Hak Cipta Terpelihara</span>
    </div>
  );
}
