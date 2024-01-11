import React, { useState, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import NavBar from "src/components/common/NavBar";
import title from "src/assets/images/title.webp";
import Footer from "src/components/common/Footer";
import pic3 from "src/assets/images/profile_image/profile_image_3.webp";
import { NavLink } from "react-router-dom";
import { observer } from "src/utils/IntersectionObserver";
import TopBar from "src/pages/TopBar";

export default function Home() {
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const [textNum, setTextNum] = useState(0);

  const textAnimationList = document.querySelectorAll(".aaa");
  const imageAnimationList = document.querySelectorAll(".profile");
  // 반복문을 돌려 모든 DOM에 적용
  textAnimationList.forEach((el) => observer.observe(el));
  imageAnimationList.forEach((el) => observer.observe(el));

  return (
    <section className="home-page">
      <NavBar></NavBar>
      <TopBar color="#93C6D5" />
      <motion.img
        alt="title"
        src={title}
        style={{ width: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.2, 0.5, 1.01],
        }}
      ></motion.img>

      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img alt="pic3" src={pic3}></img>
        </div>

        <div className="profile-text-wrapper">
          <div className="profile-introduce-title-container">
            <div>안녕하세요!</div>
            <div className="profile-introduce-subtitle-box">
              <strong>행복하게 매일을 살아가는 개발자,</strong>
              <div className="profile-introduce-subtitle-2">정혜인 입니다.</div>
            </div>
          </div>
          <div className="profile-introduce-desc">
            <div>
              개발을 하며 힘들 때도 많지만,
              <br />
              구현해냈을 때의 희열은 계속 개발을 하게 만드는 원동력이 됩니다.
            </div>
            <div>
              그 희열을 누구보다 잘 알기에
              <br />
              항상 공부하고, 성장해나갑니다.
              <br />
              희열을 느끼기 위해 앞으로도 끊임없이 공부할 것입니다.
            </div>
            <div>저에 대한 자세한 내용은 introduce 메뉴에서 확인 바랍니다.</div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <NavLink
          className="to-introduce-btn"
          to={`${process.env.PUBLIC_URL}/introduce`}
        >
          to Introduce Menu
        </NavLink>
      </div>
      <Footer />
    </section>
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
