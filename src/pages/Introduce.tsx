import React, { useEffect, useState } from "react";
import NavBar from "src/components/layout/NavBar";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import profile_image_8 from "src/assets/images/profile_image/profile_image_8.webp";
import pic1 from "src/assets/images/profile_image/profile_image_2.webp";
import pic2 from "src/assets/images/profile_image/profile_image_4.webp";
import pic3 from "src/assets/images/profile_image/profile_image_3.webp";
import Footer from "src/components/layout/Footer";
import "../assets/css/pages/introduce.scss";
import { EducationData } from "src/types/type";
import DashTitle from "src/components/common/DashTitle";
import SkillsContainer from "src/components/SkillsContainer";
import TopBar from "src/components/common/TopBar";
import { useTranslation } from "react-i18next";
import Layout from "src/components/layout/Layout";

export default function Introduce() {
  const { t } = useTranslation();
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const [textNum, setTextNum] = useState(0);
  const textList = [
    t("introduce.typing.random-1"),
    t("introduce.typing.random-2"),
    t("introduce.typing.random-3"),
    t("introduce.typing.random-4"),
  ];
  const educationList: EducationData[] = [
    {
      period: "2018 ~ 2020",
      name: t("introduce.education.high-school"),
    },
    {
      period: "2019",
      name: t("introduce.education.science-gen"),
    },
    {
      period: "2021~",
      name: t("introduce.education.univ"),
    },
    {
      period: "2024",
      name: t("introduce.education.apple-academy"),
    },
  ];

  useEffect(() => {
    const completedTitle = textList[textNum];

    const interval =
      count <= completedTitle.length - 1
        ? setInterval(() => {
            setLandingTitle((prev) => {
              let result = prev
                ? prev + completedTitle[count]
                : completedTitle[0];
              setCount((prev) => count + 1);
              return result;
            });
          }, 150)
        : undefined;
    if (count === completedTitle.length) {
      setTimeout(() => {
        clearInterval(interval);
        setLandingTitle("");
        textNum === textList.length - 1
          ? setTextNum(0)
          : setTextNum(textNum + 1);
        setCount(0);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [count]);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, options);
  const imageAnimationList = document.querySelectorAll(
    ".introduce-profile-image",
  );
  const textAnimationList = document.querySelectorAll(
    ".introduce-profile-name",
  );
  const photolistAnimationList = document.querySelectorAll(".my-photo-list");

  imageAnimationList.forEach((el) => observer.observe(el));
  textAnimationList.forEach((el) => observer.observe(el));
  photolistAnimationList.forEach((el) => observer.observe(el));

  return (
    <Layout>
      <section className="introduce-page">
        <TopBar color="#ffd400" />
        <div className="introduce-profile-image">
          <motion.img
            alt="profile_image_8"
            src={profile_image_8}
            width="500px"
          ></motion.img>
        </div>
        <motion.div className="introduce-profile-name">
          <div className="title-font">Jeong Hye In</div>
        </motion.div>

        <div className="introduce-page-desc">
          <div>
            {t("introduce.desc.1p-1")}
            <br />
            {t("introduce.desc.1p-2")}
          </div>
          <div>
            {t("introduce.desc.2p-1")}
            <br />
            {t("introduce.desc.2p-2")}
            <br />
            {t("introduce.desc.2p-3")}
          </div>
          <div>
            {t("introduce.desc.3p-1")}
            <br />
            {t("introduce.desc.3p-2")}
          </div>
          <div>
            {t("introduce.desc.4p-1")}
            <br />
            {t("introduce.desc.4p-2")}
          </div>
        </div>
        <div className="my-photo-list">
          <img alt="pic1" src={pic1}></img>
          <img alt="pic2" src={pic2}></img>
          <img alt="pic3" src={pic3}></img>
        </div>

        <div className="typing-section-wrapper">
          <div className="my-interested-text">
            {t("introduce.typing.hello")}
          </div>
          <div className="my-interested-text">
            <strong>
              <div className="typing-text">{landingTitle}</div>{" "}
              {t("introduce.typing.my-name")}
            </strong>
          </div>
        </div>

        <div className="my-interested-wrapper">
          <div className="my-interested-text">
            👩🏻‍💻 {t("introduce.interest.1-desc")}
            <strong>{t("introduce.interest.1-name")}</strong>
            {t("introduce.interest.1-like")}
          </div>
          <div className="my-interested-text">
            📸 {t("introduce.interest.2-desc")}
            <strong>{t("introduce.interest.2-name")}</strong>
            {t("introduce.interest.2-like")}
          </div>
          <div className="my-interested-text">
            🥁 {t("introduce.interest.3-desc")}
            <strong>{t("introduce.interest.3-name")}</strong>
            {t("introduce.interest.3-like")}
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="my-interested-text">
            📧 CONTACT | jhi2359@gmail.com
          </div>
          <div className="my-interested-text">
            🐱 GITHUB |{" "}
            <NavLink className="link-text" to="https://github.com/happyhyep">
              @happyhyep
            </NavLink>
          </div>
        </div>
        <DashTitle name="Education"></DashTitle>
        <div className="education-wrapper">
          {educationList &&
            educationList.map(function (el: EducationData) {
              return (
                <div className="education-text">
                  {el.name} ({el.period})
                </div>
              );
            })}
        </div>
        <DashTitle name="Skills"></DashTitle>
        <SkillsContainer />
      </section>
    </Layout>
  );
}

// const DashLine = styled.div`
//   width: 30%;
//   height: 0px;
//   border: 1px dashed #000000;
//   margin-bottom: 70px;
//   margin-top: 70px;
// `;
// const IntroduceText = styled.div`
//   font-family: Noto Sans KR;
//   font-size: 17px;
//   color: #53354a;
//   margin-top: 5px;
// `;
//
// const Contact = styled.div`
//   font-family: Noto Sans KR;
//   font-size: 20px;
//   text-align: center;
//   color: #53354a;
//   margin-top: 5px;
// `;
//
// const Link = styled(NavLink)`
//   text-decoration: none;
//   color: #53354a;
// `;
//
// const Happyhyep = styled.div`
//   font-family: iceJaram-Rg;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 80px;
//   line-height: 71px;
//   text-align: center;
//   letter-spacing: 0.15em;
// `;
//
// const Typing = styled.div`
//   display: inline;
//   vertical-align: middle;
//   border-right: 0.05em solid black;
//   animation: cursor 0.2s ease infinite;
//   color: #ffd400;
// `;
