import React from "react";
import NavBar from "src/components/layout/NavBar";
import Footer from "src/components/layout/Footer";

export default function Activities() {
  return (
    <>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
          marginBottom: "80px",
        }}
      >
        페이지 준비중입니다 ...
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        2023 경희대학교 컴퓨터공학부 학생회장
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        2023 San Jose Univ. 전공연수
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        2023 CES 참여
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        2022 경희대학교 컴퓨터공학부 부학생회장
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        2021 경희대학교 소프트웨어융합대학 학생회 홍보부
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        2019 포항장성고등학교 전교회장
      </div>
      <Footer />
    </>
  );
}
