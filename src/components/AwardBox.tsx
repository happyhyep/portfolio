import React from "react";

const AwardBox = (props: any) => {
  return (
    <div className="box-container">
      <div className="box">
        <img alt="award-img" src={props.img}></img>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default AwardBox;
