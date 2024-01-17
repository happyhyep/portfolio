import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LangToast from "src/components/common/LangToast";
import MobileMenu from "src/components/common/MobileMenu";
import { useRecoilState } from "recoil";
import { mobileMenu, recoilMobileMenu } from "src/states/recoilMobileMenu";

const NavBar = () => {
  const [isOpenedMobileMenu, setIsOpenedMobileMenu] =
    useRecoilState(recoilMobileMenu);
  const recoilMobileMenuState: mobileMenu = { ...isOpenedMobileMenu };

  const openMobileMenu = () => {
    recoilMobileMenuState.value = !isOpenedMobileMenu.value;
    setIsOpenedMobileMenu(recoilMobileMenuState);
  };

  return (
    <>
      {isOpenedMobileMenu.value ? <MobileMenu /> : null}
      <div className="nav-bar">
        <NavLink className="nav-text-logo" to={`${process.env.PUBLIC_URL}/`}>
          <div className="animated-text happyhyep-text">happyhyep</div>
        </NavLink>

        <div className="link-container">
          <NavLink
            className="link-text"
            to={`${process.env.PUBLIC_URL}/introduce`}
          >
            Introduce
          </NavLink>
          <NavLink
            className="link-text"
            to={`${process.env.PUBLIC_URL}/awards`}
          >
            Awards
          </NavLink>
          <NavLink
            className="link-text"
            to={`${process.env.PUBLIC_URL}/projects`}
          >
            Projects
          </NavLink>
          <NavLink
            className="link-text"
            to={`${process.env.PUBLIC_URL}/activities`}
          >
            Activities
          </NavLink>
          <NavLink
            className="link-text"
            to={`${process.env.PUBLIC_URL}/gallery`}
          >
            Gallery
          </NavLink>
          <LangToast isMobile={false} />
        </div>
        <div className="mobile-header-right">
          <LangToast isMobile={true} />
          <img
            onClick={openMobileMenu}
            src={process.env.PUBLIC_URL + "/assets/icons/menu.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
