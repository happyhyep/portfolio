import React from "react";
import Layout from "src/components/layout/Layout";
import DashTitle from "src/components/common/DashTitle";

export default function Gallery() {
  return (
    <Layout>
      <section className="gallery-page">
        <DashTitle name="Gallery" />
        <div className="satellites">
          <img
            className="satellite"
            style={{ transform: "rotateY(0) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_16.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(20deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_9.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(40deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_15.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(60deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_1.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(80deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_2.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(100deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_3.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(120deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_4.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(140deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_5.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(160deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_6.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(180deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_7.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(200deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_8.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(220deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_10.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(240deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_11.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(260deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_12.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(280deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_13.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(300deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_14.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(320deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_17.webp"
            }
          />
          <img
            className="satellite"
            style={{ transform: "rotateY(340deg) translateZ(100rem)" }}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/profile_image/profile_image_18.webp"
            }
          />
        </div>
      </section>
    </Layout>
  );
}
