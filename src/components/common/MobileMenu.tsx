import React from "react";
import { useRecoilState } from "recoil";
import { mobileMenu, recoilMobileMenu } from "src/states/recoilMobileMenu";
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
        <img
          onClick={closeMobileMenu}
          src={process.env.PUBLIC_URL + "/assets/icons/close.svg"}
        />
      </div>

      <div className="logo-wrapper">
        <img src={process.env.PUBLIC_URL + "/assets/images/happyhyep.svg"} />
      </div>
      <div className="menu-wrapper">
        <NavLink
          to={`${process.env.PUBLIC_URL}/introduce`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Introduce</div>
          <img src={process.env.PUBLIC_URL + "/assets/icons/arrow.svg"} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/awards`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Awards</div>
          <img src={process.env.PUBLIC_URL + "/assets/icons/arrow.svg"} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/projects`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Projects</div>
          <img src={process.env.PUBLIC_URL + "/assets/icons/arrow.svg"} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/activities`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Activities</div>
          <img src={process.env.PUBLIC_URL + "/assets/icons/arrow.svg"} />
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/gallery`}
          onClick={clearIsOpenedMenu}
          className="menu"
        >
          <div className="menu-text">Gallery</div>
          <img src={process.env.PUBLIC_URL + "/assets/icons/arrow.svg"} />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
