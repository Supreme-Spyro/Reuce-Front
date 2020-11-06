import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "../../../styles/Font.scss";
import recycling from "../../../assets/recycling.svg";
import moneyTree from "../../../assets/moneyTree.svg";
import ecology from "../../../assets/ecology.svg";

export default function WhyUs() {
  const whyUsContent = [
    {
      img: ecology,
      text: `Jadilah bagian dari agen perubahan lingkungan dengan ikut mendaur-ulang sampah kalian!`,
    },
    {
      img: moneyTree,
      text: `Maksimalkan potensi keuntungan anda dengan mengubah sampah menjadi rupiah`,
    },
    {
      img: recycling,
      text: "Kenyamanan anda nomor 1! Nikmati proses daur-ulang dengan mudah dan praktis",
    },
  ];



  return (
    <Row className="mx-auto px-2 w-100 justify-content-around text-center">
      {whyUsContent.map((item, index) => (
        <Col className="mx-auto mb-md-4" key={index} xs={10} md={6} lg={4}>
          <img  width="80%" src={item.img} alt="" />
          <p style={{ fontSize: "0.65em", fontWeight:"600" }} className="nunito mx-5">
            {item.text}
          </p>
        </Col>
      ))}
    </Row>
  );
}
