import React from "react";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { ModalState, recoilModalState } from "src/states/recoilModalState";

const VideoModal = ({ video }: any) => {
  const [videoModalState, setVideoModalState] =
    useRecoilState(recoilModalState);
  const defaultRecoilModalState: ModalState = { ...videoModalState };

  const closeModal = () => {
    defaultRecoilModalState.value = !videoModalState;
    defaultRecoilModalState.src = null;
    setVideoModalState(defaultRecoilModalState);
  };
  const setPlayBackRate = () => {
    document.getElementsByTagName("video")[0].playbackRate = 1.6;
  };

  return (
    <div className="video-modal">
      <div className="close-btn" onClick={closeModal}>
        X
      </div>
      <video id="video" controls={true} onCanPlay={() => setPlayBackRate()}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoModal;
