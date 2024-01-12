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
  // const videoRef = useRef();
  const setPlayBackRate = () => {
    document.getElementsByTagName("video")[0].playbackRate = 1.6;
  };

  return (
    <div className="video-modal">
      <div className="close-btn" onClick={closeModal}>
        X
      </div>
      <video
        id="video"
        controls={true}
        // ref={videoRef}
        onCanPlay={() => setPlayBackRate()}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoModal;

// const CloseButton = styled.button`
//     position: fixed;
//     z-index: 999999;
//     right: 20px;
//     top: 10px;
//     cursor: pointer;
//
//     font-family: applesdgothic;
//     font-size: 30px;
//
// `
