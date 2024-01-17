import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import TopBar from "src/components/common/TopBar";
import { useTranslation } from "react-i18next";
import Layout from "src/components/layout/Layout";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const titleImg = document.querySelectorAll(".title-img");
    window.addEventListener("scroll", function () {
      let yValue = window.scrollY;
      if (titleImg) {
        if (yValue > 0) {
          titleImg.forEach((el) => el.classList.remove("zoomIn"));
          titleImg.forEach((el) => el.classList.add("zoomOut"));
        } else {
          titleImg.forEach((el) => el.classList.remove("zoomOut"));
          titleImg.forEach((el) => el.classList.add("zoomIn"));
        }
      }
    });
  });

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
          className="title-img"
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
