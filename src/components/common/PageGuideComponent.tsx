import React from "react";
import { useRecoilState } from "recoil";
import {
  guideComponent,
  recoilGuideComponent,
} from "src/states/recoilGuideComponent";

const PageGuideComponent = () => {
  const [showPageGuideComponent, setShowPageGuideComponent] =
    useRecoilState(recoilGuideComponent);
  const defaultRecoilGuideState: guideComponent = { ...showPageGuideComponent };

  const closeGuideComponent = () => {
    defaultRecoilGuideState.value = false;
    setShowPageGuideComponent(defaultRecoilGuideState);
  };
  return (
    <section className="page-guide-component">
      <img
        className="arrow-left"
        src={process.env.PUBLIC_URL + "/assets/icons/guide/arrow-left.svg"}
      />
      <div className="go-to-home go-to-text">Go To Home</div>

      <img
        className="arrow-right arrow-menu"
        src={process.env.PUBLIC_URL + "/assets/icons/guide/arrow-left.svg"}
      />
      <div className="go-to-menu go-to-text">Go To Menu</div>

      <img
        className="arrow-right language-menu"
        src={process.env.PUBLIC_URL + "/assets/icons/guide/arrow-left.svg"}
      />
      <div className="change-language go-to-text">Change Language</div>

      <img
        className="arrow-scroll-down"
        src={
          process.env.PUBLIC_URL + "/assets/icons/guide/arrow-scrolldown.svg"
        }
      />
      <div className="scroll-to-down">Scroll To Down</div>
      <div className="btn-got-it" onClick={closeGuideComponent}>
        I Got It
      </div>
    </section>
  );
};

export default PageGuideComponent;
