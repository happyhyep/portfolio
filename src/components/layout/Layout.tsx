import React from "react";
import NavBar from "src/components/layout/NavBar";
import Footer from "src/components/layout/Footer";
import VideoModal from "src/components/VideoModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalState, recoilModalState } from "src/states/recoilModalState";
import PageGuideComponent from "src/components/common/PageGuideComponent";

interface childProps {
  children: JSX.Element;
}
const Layout = (props: childProps) => {
  const videoModalState = useRecoilValue(recoilModalState);

  return (
    <>
      {videoModalState.value ? (
        <VideoModal video={videoModalState.src} />
      ) : null}
      {videoModalState.value ? (
        <div className="dim">
          <NavBar />
          <section className="page-wrapper">{props.children}</section>
          <Footer />
        </div>
      ) : (
        <>
          <PageGuideComponent />
          <NavBar />
          <section className="page-wrapper">{props.children}</section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
