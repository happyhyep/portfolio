import React, { useState, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
// import pic3 from "assets/images/profile_image/profile_image_3.webp";
import { NavLink } from "react-router-dom";
import { observer } from "src/lib/worker/IntersectionObserver";
import TopBar from "src/components/common/TopBar";
import { useTranslation } from "react-i18next";
import Layout from "src/components/layout/Layout";

export default function Home() {
  const { t } = useTranslation();

  const textAnimationList = document.querySelectorAll(".aaa");
  const imageAnimationList = document.querySelectorAll(".profile");
  // 반복문을 돌려 모든 DOM에 적용
  textAnimationList.forEach((el) => observer.observe(el));
  imageAnimationList.forEach((el) => observer.observe(el));
  return (
    <Layout>
      <section className="home-page">
        <TopBar color="#93C6D5" />
        <motion.img
          alt="title"
          src={process.env.PUBLIC_URL + "/assets/images/title.webp"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ width: "100%", height: "100%" }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.2, 0.5, 1.01],
          }}
          width="1905px"
          height="1107.470px"
        ></motion.img>
        <div className="profile-container">
          <div className="profile-img-wrapper">
            <img
              alt="pic3"
              src={
                process.env.PUBLIC_URL +
                "/assets/images/profile_image/profile_image_5.webp"
              }
            ></img>
          </div>

          <div className="profile-text-wrapper">
            <div className="profile-introduce-title-container">
              <div>{t("home.title-hello")}</div>
              <div className="profile-introduce-subtitle-box">
                <strong>{t("home.title-always-happy")}</strong>
                <div className="profile-introduce-subtitle-2">
                  {t("home.title-my-name")}
                </div>
              </div>
            </div>
            <div className="profile-introduce-desc">
              <div>
                {t("home.desc-1p-1")}
                <br />
                {t("home.desc-1p-2")}
              </div>
              <div>
                {t("home.desc-2p-1")}
                <br />
                {t("home.desc-2p-2")}
                <br />
                {t("home.desc-2p-3")}
              </div>
              <div>{t("home.desc-3p-1")}</div>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <NavLink
            className="to-introduce-btn"
            to={`${process.env.PUBLIC_URL}/introduce`}
          >
            Introduce Menu →
          </NavLink>
        </div>
      </section>
    </Layout>
  );
}

// const Happyhyep = styled.div`
//     font-family: redemption;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 90px;
//     line-height: 71px;
//     text-align: center;
//     letter-spacing: 0.175em;
// `
// const Contact = styled.div`
//     font-family: applesdgothic;
//     font-size: 20px;
//     color: #53354A;
//     margin-top: 5px;
// `

// const Typing = styled.div`
//     color: #ffd700;
//     display: inline;
//     vertical-align: middle;
//     border-right: .05em solid black;
//     animation:  cursor 0.2s ease infinite;
// `

// const Button = styled(NavLink)`
//     border-radius: 5px;
//     border-width: 0.5px;
//     width: 200px;
//     height: 30px;
//     background-color: #333;
//     color: #fff;
//     text-align: center;
//     text-decoration: none;
// `
