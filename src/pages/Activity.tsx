import React from "react";
import Layout from "src/components/layout/Layout";
import { NavLink } from "react-router-dom";
import DashTitle from "src/components/common/DashTitle";
import getActivityData from "src/lib/worker/getActivityData";

export default function Activities() {
  const activityData = getActivityData();
  return (
    <Layout>
      <section className="activities-page">
        <div className="g-snows">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>

        <DashTitle name="What I've Done" />
        <div className="sub-title">
          - Summary Of Education, Activities, Work Experience -
        </div>

        {activityData.map((el) => {
          return (
            <>
              <div className="activity-container">
                <div className="activity-dot-wrapper">
                  <div className="activity-line"></div>
                  <div className="activity-circle"></div>
                </div>
                <div className="text-wrapper">
                  <div className="title-text">{el.value}</div>
                  <div className="sub-text">{el.date}</div>
                </div>
              </div>
            </>
          );
        })}

        {/*<div className="btn-container">*/}
        {/*  <NavLink*/}
        {/*    className="change-page-btn"*/}
        {/*    to={`${process.env.PUBLIC_URL}/gallery`}*/}
        {/*  >*/}
        {/*    Gallery Page →*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
      </section>
    </Layout>
  );
}
