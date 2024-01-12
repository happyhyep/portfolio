import React from "react";

const AwardBox = (props: any) => {
  return (
    <div className="box">
      <img alt="award-img" src={props.img}></img>
      <div>{props.text}</div>
    </div>
  );
};

export default AwardBox;
