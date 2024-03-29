import React from "react";

const DashTitle = (props: any) => {
  return (
    <div className="dash-title">
      <div className="dash-line" />
      <div className="title-font">{props.name}</div>
      <div className="dash-line" />
    </div>
  );
};

export default DashTitle;
