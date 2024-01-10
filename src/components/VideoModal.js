import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

const VideoModal = ({setIsVideoModalOpen, video, pageNumber}) => {
    const closeModal = () => {
        setIsVideoModalOpen(false);
    };
    const videoRef= useRef();
    const setPlayBackRate = () => {
      videoRef.current.playbackRate = 1.6;
    };

    return (
        <div style={{
            position: 'absolute',
            top: '0',
            left: (document.body.clientWidth)*{pageNumber},
            transform: 'translate(40%, 1%)',
            zIndex: 99999
        }}>
            <CloseButton onClick={closeModal} >X</CloseButton>
            <video width='800' controls="controls" ref={videoRef} onCanPlay={() => setPlayBackRate()} >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default VideoModal;

const CloseButton = styled.button`
    position: fixed;
    z-index: 999999;
    right: 20px;
    top: 10px;
    cursor: pointer;
    
    font-family: applesdgothic;
    font-size: 30px;
    
`