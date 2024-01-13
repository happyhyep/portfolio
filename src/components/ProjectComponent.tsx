import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { STACK_NAME } from "src/types/enum";
import github from "src/assets/icons/github.webp";
import { useRecoilState } from "recoil";
import { ModalState, recoilModalState } from "src/states/recoilModalState";

const ProjectComponent = (props: any) => {
  const [isVideoModalOpen, setIsVideoModalOpen] =
    useRecoilState(recoilModalState);
  const defaultRecoilModalState: ModalState = { ...isVideoModalOpen };

  const changeVideoModalState = () => {
    defaultRecoilModalState.value = !isVideoModalOpen.value;
    defaultRecoilModalState.src = props.data.videoLink;
    setIsVideoModalOpen(defaultRecoilModalState);
  };
  return (
    <div className="project-component">
      <div className="project-content">
        <img alt="project-img" src={props.data.img}></img>
        <div className="project-desc">
          <div className="title">
            <strong>{props.data.title}</strong>
          </div>
          <div className="subtitle">{props.data.subtitle}</div>
          {props.data.user ? (
            <div className="text">{props.data.user}</div>
          ) : null}
          <div className="text">
            {props.data.strongStacks &&
              props.data.strongStacks.map((el: STACK_NAME) => (
                <strong>{el}, </strong>
              ))}
            {props.data.stacks &&
              props.data.stacks.map((e: STACK_NAME) => {
                return props.data.stacks[props.data.stacks.length - 1] === e ? (
                  <>{e}</>
                ) : (
                  <>{e}, </>
                );
              })}
          </div>
          <br />
          <div className="text">{props.data.desc[0]}</div>
          <div className="text">{props.data.desc[1]}</div>
          <br />
          <div className="text">{props.data.desc[2]}</div>
          <div className="sub-text">{props.data.desc[3]}</div>
          <div className="sub-text">{props.data.desc[4]}</div>
        </div>
      </div>
      <div className="project-btn-container">
        <div>
          {props.data.isHaveWeb ? (
            <NavLink className="project-btn" to={props.data.webLink}>
              Web Page →
            </NavLink>
          ) : null}
        </div>

        {props.data.isHaveVideo ? (
          <button className="project-btn" onClick={changeVideoModalState}>
            VIDEO 보기 →{" "}
          </button>
        ) : null}

        {props.data.isHaveGithub ? (
          <NavLink className="project-btn" to={props.data.githubLink}>
            <img alt="github" src={github}></img>
            GITHUB
          </NavLink>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectComponent;
