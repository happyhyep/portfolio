import React from "react";
import NavBar from "src/components/layout/NavBar";
import Footer from "src/components/layout/Footer";

export default function Gallery() {
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
      {/*<Box>페이지 준비중입니다.</Box>*/}
      <Footer />
    </>
  );
}

// const Box = styled.div`
//   @property --gradient-angle {
//     syntax: "<angle>";
//     initial-value: 0deg;
//     inherits: false;
//   }
//
//   inset: -0.5rem;
//   width: 100%;
//
//   background: conic-gradient(
//     from var(--gradient-angle),
//     #01c7b7,
//     #21bcd6,
//     #1779bb
//   );
//   animation: rotation 20s linear infinite;
//   @keyframes rotation {
//     0% {
//       --gradient-angle: 0deg;
//     }
//     100% {
//       --gradient-angle: 360deg;
//     }
//   }
// `;
