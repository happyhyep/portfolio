import React from "react";
import { useRecoilState } from "recoil";
import { mobileMenu, recoilMobileMenu } from "src/states/recoilMobileMenu";
import closeIcon from "src/assets/icons/close.svg";
import logo from "src/assets/images/happyhyep.svg";
import arrow from "src/assets/icons/arrow.svg";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [isOpenedMobileMenu, setIsOpenedMobileMenu] =
    useRecoilState(recoilMobileMenu);
  const recoilMobileMenuState: mobileMenu = { ...isOpenedMobileMenu };

  const closeMobileMenu = () => {
    if (recoilMobileMenuState.value) {
      const menuEl: HTMLElement | null = document.querySelector(".mobileMenu");
      menuEl?.classList.toggle("active");
      recoilMobileMenuState.value = !isOpenedMobileMenu.value;
      setIsOpenedMobileMenu(recoilMobileMenuState);
    }
  };

  const clearIsOpenedMenu = () => {
    const menuEl: HTMLElement | null = document.querySelector(".mobileMenu");
    menuEl?.classList.add("mobileMenu-active");
    recoilMobileMenuState.value = false;
    setIsOpenedMobileMenu(recoilMobileMenuState);
  };
  return (
    <div className="mobileMenu">
      <div className="close-btn-wrapper">
        <img onClick={closeMobileMenu} src={closeIcon} />
      </div>

      <div className="logo-wrapper">
        <img src={logo} />
      </div>
      <div className="menu-wrapper">
        <NavLink
          to={`${process.env.PUBLIC_URL}/introduce`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Introduce</div>
          <img src={arrow} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/awards`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Awards</div>
          <img src={arrow} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/projects`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Projects</div>
          <img src={arrow} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/activities`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Activities</div>
          <img src={arrow} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/gallery`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Gallery</div>
          <img src={arrow} />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
