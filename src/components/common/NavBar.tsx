import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import langIcon from "src/assets/icons/lang.svg";
import menuIcon from "src/assets/icons/menu.svg";
import checkedIcon from "src/assets/icons/check.svg";
import { SelectOptionInterface } from "src/types/type";
import { loadLocalData, saveLocalData } from "src/utils/common-util";
import AppConfig from "src/constants";
import { getI18n, useTranslation } from "react-i18next";
import i18n from "src/lang/index";
import App from "@src/App";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;

const NavBar = () => {
  const { t } = useTranslation();
  const langOptions: SelectOptionInterface[] = [
    { value: "ko", label: t("lang.ko") },
    { value: "jp", label: t("lang.jp") },
    { value: "en", label: t("lang.en") },
  ];
  const [isOpenedLangToast, setIsOpenedLangToast] = useState(false);
  const openLangToast = () => {
    const toastElement: HTMLElement | null =
      document.querySelector(".display-none");
    isOpenedLangToast
      ? toastElement?.classList.remove("lang-toast")
      : toastElement?.classList.add("lang-toast");
    setIsOpenedLangToast(!isOpenedLangToast);
  };

  const changeLangOption = (clickedLang: SelectOptionInterface) => {
    saveLocalData(AppConfig.KEYS.LANG, clickedLang.value);
    i18n.changeLanguage(clickedLang.value);

    console.log(loadLocalData(AppConfig.KEYS.LANG), getI18n());
    setIsOpenedLangToast(false);
  };

  useEffect(() => {
    const toastElement: HTMLElement | null =
      document.querySelector(".display-none");
    isOpenedLangToast
      ? toastElement?.classList.add("lang-toast")
      : toastElement?.classList.remove("lang-toast");
  }, [isOpenedLangToast]);

  return (
    <div className="nav-bar">
      <div className="top-menu">
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
        </div>
        <div className="mobile-header-right">
          <img onClick={openLangToast} src={langIcon} />
          <div className="display-none">
            <ul>
              {langOptions.map((el) => {
                if (el.value === loadLocalData(AppConfig.KEYS.LANG)) {
                  return (
                    <section className="checked-lang-wrapper">
                      <img src={checkedIcon} />
                      <li onClick={() => changeLangOption(el)}>{el.label}</li>
                    </section>
                  );
                }
                // @ts-ignore
                return <li onClick={() => changeLangOption(el)}>{el.label}</li>;
              })}
            </ul>
          </div>
          <img src={menuIcon} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// const TopMenu = styled.div`
//   height: 70px;
//   display: flex;
//   border-bottom-color: black;
//   border-bottom-style: solid;
//   border-bottom-width: 2px;
//   justify-content: space-between;
//   background-color: white;
//   width: 100%;
// `;
//
// const NavTextLogo = styled(NavLink)`
//   text-decoration: none;
//
//   .animated-text {
//     color: transparent;
//     width: 40vmax;
//
//     cursor: pointer;
//
//     background: conic-gradient(
//       #00a6c6 10%,
//       #01c7b7 20%,
//       #f3ecdc 30%,
//       #dfdbce 35%,
//       #b8b8b5 62%,
//       #90796e 62%,
//       #033468 75%,
//       #21bcd6 75%,
//       #1779bb 85%,
//       #768fd6 85%
//     );
//
//     background-size: 50%;
//     background-clip: text;
//     -webkit-background-clip: text;
//
//     animation: expand-rev 1s ease forwards;
//
//     &:hover {
//       animation: expand 1s ease forwards;
//     }
//   }
//
//   @keyframes expand {
//     0% {
//       background-size: 30%;
//       background-position: 0 0;
//     }
//     20% {
//       background-size: 55%;
//       background-position: 0 1em;
//     }
//     100% {
//       background-size: 325%;
//       background-position: -15em -1em;
//     }
//   }
//
//   @keyframes expand-rev {
//     0% {
//       background-size: 325%;
//       background-position: -10em -4em;
//     }
//     20% {
//       background-size: 55%;
//       background-position: 0 2em;
//     }
//     100% {
//       background-size: 30%;
//       background-position: 2em 0.1em;
//     }
//   }
// `;
//
// const NavText = styled(NavLink)`
//   margin-left: 0rem;
//   margin-right: 28px;
//   display: flex;
//   align-items: center;
//
//   font-size: 16px;
//   font-family: Noto Sans KR;
//   color: rgb(0, 0, 0);
//   text-decoration: none;
// `;
//
// const Happyhyep = styled.div`
//   margin-left: 30px;
//   align-items: center;
//   letter-spacing: 0.09em;
//
//   font-family: Redemption;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 60px;
// `;
