import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "src/components/layout/Layout";
import TopBar from "src/components/common/TopBar";
import DashTitle from "src/components/common/DashTitle";
import ProjectComponent from "src/components/ProjectComponent";
import getProjectPropsData from "src/lib/worker/getProjectPropsData";

export default function Projects() {
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "999",
          left: "2rem",
          borderRadius: "10rem",
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "999",
          right: "2rem",
          borderRadius: "10rem",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const propsObj = getProjectPropsData();

  return (
    <Layout>
      <section className="projects-page">
        <TopBar color="#000000" />
        <DashTitle name="Web"></DashTitle>
        <Slider {...settings}>
          {propsObj &&
            propsObj.map((el) => {
              return <ProjectComponent data={el} />;
            })}
        </Slider>
      </section>
    </Layout>
  );
}

// const DashLine = styled.div`
//   width: 30%;
//   height: 0px;
//   border: 1px dashed #000000;
//   margin-bottom: 30px;
//   margin-top: 30px;
// `;
//
// const Happyhyep = styled.div`
//   font-family: iceJaram-Rg;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 50px;
//   line-height: 71px;
//   text-align: center;
//   letter-spacing: 0.175em;
// `;
//
// const Title = styled.div`
//   font-family: Noto Sans KR;
//   font-size: 30px;
//   color: #53354a;
//   margin-top: 30px;
// `;
//
// const Text = styled.div`
//   font-family: Noto Sans KR;
//   font-size: 15px;
//   color: #53354a;
//   margin-top: 5px;
// `;
//
// const GithubButton = styled(NavLink)`
//   border-radius: 5px;
//   border-width: 0.5px;
//   width: 100px;
//   height: 30px;
//   background-color: #333;
//   color: #fff;
//   text-align: center;
//   text-decoration: none;
//   margin-bottom: 30px;
// `;
// const VideoButton = styled.button`
//   border-radius: 5px;
//   border-width: 0.5px;
//   width: 100px;
//   height: 30px;
//   background-color: #333;
//   color: #fff;
//   text-align: center;
//   text-decoration: none;
// `;
