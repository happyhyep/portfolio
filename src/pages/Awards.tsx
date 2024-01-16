import React, {
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { observer } from "src/lib/worker/IntersectionObserver";
import TopBar from "src/components/common/TopBar";
import Layout from "src/components/layout/Layout";
import AwardBox from "src/components/AwardBox";
import { AwardData } from "src/types/type";
import { useTranslation } from "react-i18next";
export default function Awards(this: any) {
  const { t } = useTranslation();
  // TODO redux로 관리해서 InsertsectionObserver 함수에서 상태 변화시키기
  // const [isBoxShown, setIsBoxShown] = useState(false);
  let awardBoxEl = React.createRef();

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

  const awardsList: AwardData[] = [
    {
      key: "money",
      name: t("awards.money"),
      img: process.env.PUBLIC_URL + "/assets/images/awards/award_money.webp",
    },
    {
      key: "sanjose",
      name: t("awards.sanjose"),
      img: process.env.PUBLIC_URL + "/assets/images/awards/award_sanjose.webp",
    },
    {
      key: "khu",
      name: t("awards.khu"),
      img: process.env.PUBLIC_URL + "/assets/images/awards/award_dcom.webp",
    },
    {
      key: "edu",
      name: t("awards.edu"),
      img: process.env.PUBLIC_URL + "/assets/images/awards/award_edu.webp",
    },
  ];
  let awardBox;
  for (let i = 0; i < awardsList.length; i++) {
    awardBox = document.querySelectorAll(`.box-index-${i}`);
    // awardBox.push(document.querySelector(`.box-index-${i}`));
    console.log(awardBox);
    console.log(document.querySelectorAll(`.box-index-${i}`));
    // @ts-ignore
    awardBox.forEach((el) => {
      observer.observe(el);
    });
  }

  return (
    <Layout>
      <section className="awards-page">
        <TopBar color="#000000" />
        {awardsList &&
          awardsList.map((el, index) => {
            return (
              <div className={`box-container box-index-${index}`}>
                <div className="box">
                  <img alt="award-img" src={el.img}></img>
                  <div>{el.name}</div>
                </div>
              </div>
            );
          })}
      </section>
    </Layout>
  );
}

// const Box = styled.div`
//   width: 70%;
//   margin-top: 3%;
//
//   background: white;
//   border-radius: 2rem;
//   box-shadow: 3px 3px 20px 6px gray;
//
//   font-family: Noto Sans KR;
//   color: #53354a;
// `;
//
// const AwardImg = styled.img`
//   width: 50%;
//   margin-top: 5%;
//   margin-left: 25%;
//   margin-bottom: 3%;
// `;
