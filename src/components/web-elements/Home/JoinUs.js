import React from "react";

import { Row, Col } from "react-bootstrap";

import "../../../styles/Font.scss";
import recycling from "../../../assets/recycling.svg";
import mobilePhone from "../../../assets/mobile_phone.svg";
import personalData from "../../../assets/personal_data.svg";

export default function JoinUs() {
  const whyUsContent = [
    {
      img: personalData,
      text: `Buat Akun ©Reuce dan isi data diri dengan benar`,
    },
    {
      img: mobilePhone,
      text: `Buat baru iklan dan isi data barang yang ingin didaur-ulang dengan sesuai`,
    },
    {
      img: recycling,
      text:
        "Jika terjual, drop di ©ReuceBox terdekat dan dapatkan keuntungan anda",
    },
  ];

  return (
    <Row className="mx-auto px-2 w-100 justify-content-around text-center">
      {whyUsContent.map((item, index) => (
        <Col className="mx-auto mb-md-4" key={index} xs={10} md={6} lg={4}>
          <img
            style={{ maxHeight: "200px" }}
            width="80%"
            src={item.img}
            alt=""
          />
          <h4 className="nunito">{index + 1}</h4>
          <p
            style={{ fontSize: "0.65em", fontWeight: "600" }}
            className="nunito mx-5"
          >
            {item.text}
          </p>
        </Col>
      ))}
    </Row>
  );
}
