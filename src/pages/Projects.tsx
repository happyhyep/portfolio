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
import { NavLink } from "react-router-dom";

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
