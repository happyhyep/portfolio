import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { STACK_NAME } from "src/types/enum";
import github from "src/assets/icons/github.webp";
import VideoModal from "src/components/VideoModal";
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
        {/* <div style={{display: 'flex', justifyContent: 'end', marginTop: '5px', marginRight: '50px'}}>
                      <VideoButton onClick={onVideoModalOpen1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>VIDEO 보기 → </VideoButton>
                  </div> */}
        {/*{isVideoModalOpen1 ? (*/}
        {/*  <VideoModal*/}
        {/*    setIsVideoModalOpen={setIsVideoModalOpen1}*/}
        {/*    video={focuz_video}*/}
        {/*    pageNumber={1}*/}
        {/*  />*/}
        {/*) : null}*/}
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

        {/*{isVideoModalOpen.value ? (*/}
        {/*  <VideoModal video={props.data.videoLink} />*/}
        {/*) : null}*/}
        {props.data.isHaveGithub ? (
          <NavLink className="project-btn" to={props.data.githubLink}>
            <img alt="github" src={github}></img>
            GITHUB
          </NavLink>
        ) : null}
      </div>
      {/*<div style={{ display: "flex", justifyContent: "center" }}>*/}
      {/*  <video*/}
      {/*    width="600"*/}
      {/*    controls={true}*/}
      {/*    ref={videoRef}*/}
      {/*    onCanPlay={() => setPlayBackRate()}*/}
      {/*  >*/}
      {/*    <source src={props.data.videoLink} type="video/mp4" />*/}
      {/*  </video>*/}
      {/*</div>*/}
    </div>
  );
};

export default ProjectComponent;
