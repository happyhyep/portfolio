import React, { useState, useEffect } from "react";
import NavBar from "src/components/common/NavBar";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import profile_image_8 from "src/assets/images/profile_image/profile_image_8.webp";
import pic1 from "src/assets/images/profile_image/profile_image_2.webp";
import pic2 from "src/assets/images/profile_image/profile_image_4.webp";
import pic3 from "src/assets/images/profile_image/profile_image_3.webp";
import Footer from "src/components/common/Footer";
import "../assets/css/pages/introduce.scss";
import { introduceRandomTextList } from "src/utils/introduceRandomTextList";
import { EducationData } from "@src/types/type";
import { educationList } from "src/lib/EducationData";
import DashTitle from "src/components/common/DashTitle";
import SkillsContainer from "src/components/SkillsContainer";
import TopBar from "src/pages/TopBar";

export default function Introduce() {
  // const { scrollYProgress } = useScroll();

  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const [textNum, setTextNum] = useState(0);
  const textList = introduceRandomTextList;

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
    <section className="introduce-page">
      <NavBar></NavBar>
      <TopBar color="#ffd400" />
      <div className="introduce-profile-image">
        <motion.img alt="profile_image_8" src={profile_image_8}></motion.img>
      </div>
      <motion.div className="introduce-profile-name">
        <div className="introduce-page-title-font">Jeong Hye In</div>
      </motion.div>

      <div className="introduce-page-desc">
        <div>
          안녕하세요,
          <br />
          사용자들이 웹사이트나 애플리케이션을 사용할 때 좋은 경험을 제공하고자
          하는 프론트엔드 개발자 정혜인입니다.
        </div>
        <div>
          저는 사용자의 눈에 확 들어오게 하여 페이지를 각인시킴과 동시에
          UI/UX에도 신경을 쓰는 것을 중요하게 생각합니다.
          <br />
          사용자가 쉽게 이해하고 사용할 수 있는 직관적인 인터페이스를 구축하고,
          <br />
          시각적으로 매력적이고 현대적인 디자인을 구현하는 것에 열정을 갖고
          있습니다.
        </div>
        <div>
          항상 창의적이고 협업을 중요시하는 개발자로서 최선을 다하고 있습니다.
          <br />
          학생회장, 동아리 활동, 개발 협업 등을 진행하며 얻은 경험을 통해 다른
          직무의 사람들과도 원활한 의사소통이 가능합니다.
        </div>
        <div>
          매사에 행복하고 긍정적인 태도로 임하여
          <br />
          단순한 코딩 뿐만 아니라 의사소통과 협업에서도 좋은 결과를 만들어낼
          것입니다.
        </div>
      </div>
      <div className="my-photo-list">
        <img alt="pic1" src={pic1}></img>
        <img alt="pic2" src={pic2}></img>
        <img alt="pic3" src={pic3}></img>
      </div>

      <div className="typing-section-wrapper">
        <div className="my-interested-text">안녕하세요!</div>
        <div className="my-interested-text">
          <strong>
            <div className="typing-text">{landingTitle}</div> 개발자 정혜인
            입니다.
          </strong>
        </div>
      </div>

      <div className="my-interested-wrapper">
        <div className="my-interested-text">
          👩🏻‍💻 상상을 현실로 구현하는, <strong>프로그래밍</strong>을 좋아합니다.
        </div>
        <div className="my-interested-text">
          📸 아름다운 순간을 기록하는, <strong>사진 촬영</strong>을 좋아합니다.
        </div>
        <div className="my-interested-text">
          🥁 여러 악기가 하나의 음악이 되는,{" "}
          <strong>밴드 합주(드럼 연주)</strong>를 좋아합니다.
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="my-interested-text">📧 CONTACT | jhi2359@gmail.com</div>
        <div className="my-interested-text">
          🐱 GITHUB |{" "}
          <NavLink className="link-text" to="https://github.com/happyhyep">
            @happyhyep
          </NavLink>
        </div>
      </div>
      <DashTitle name="Education"></DashTitle>
      <div className="education-wrapper">
        {educationList.map(function (el: EducationData) {
          return (
            <div className="education-text">
              {el.name} ({el.period})
            </div>
          );
        })}
      </div>
      <DashTitle name="Skills"></DashTitle>
      <SkillsContainer />
      <Footer />
    </section>
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
