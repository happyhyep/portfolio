import React, { useState } from "react";
import award_sanjose from "src/assets/images/awards/award_sanjose.webp";
import award_dcom from "src/assets/images/awards/award_dcom.webp";
import award_edu from "src/assets/images/awards/award_edu.webp";
import award_money from "src/assets/images/awards/award_money.webp";
import { observer } from "src/utils/IntersectionObserver";
import TopBar from "src/components/common/TopBar";
import Layout from "src/components/layout/Layout";
import AwardBox from "src/components/AwardBox";
import { AwardData } from "src/types/type";
import { useTranslation } from "react-i18next";

export default function Awards() {
  const { t } = useTranslation();

  // TODO redux로 관리해서 InsertsectionObserver 함수에서 상태 변화시키기
  const [isBoxShown, setIsBoxShown] = useState(false);

  const award4Box = document.querySelectorAll(".award-box-container");

  award4Box.forEach((el) => observer.observe(el));

  const awardsList: AwardData[] = [
    {
      key: "money",
      name: t("awards.money"),
      img: award_money,
    },
    {
      key: "sanjose",
      name: t("awards.sanjose"),
      img: award_sanjose,
    },
    {
      key: "khu",
      name: t("awards.khu"),
      img: award_dcom,
    },
    {
      key: "edu",
      name: t("awards.edu"),
      img: award_edu,
    },
  ];

  return (
    <Layout>
      <section className="awards-page">
        <TopBar color="#000000" />
        {awardsList &&
          awardsList.map((el, index) => {
            return <AwardBox img={el.img} text={el.name} />;
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
