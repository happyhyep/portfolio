import React, { useEffect, useState } from "react";
import { loadLocalData, saveLocalData } from "src/utils/common-util";
import AppConfig from "src/constants";
import { useTranslation } from "react-i18next";
import { SelectOptionInterface } from "src/types/type";
import i18n from "src/lang/index";

const LangToast = (props: any) => {
  const { t } = useTranslation();
  const langOptions: SelectOptionInterface[] = [
    { value: "ko", label: t("lang.ko") },
    { value: "jp", label: t("lang.jp") },
    { value: "en", label: t("lang.en") },
  ];
  const [isOpenedLangToast, setIsOpenedLangToast] = useState(false);
  const openLangToast = () => {
    const toastElement: HTMLElement | null = props.isMobile
      ? document.querySelector(".hidden-lang-toast-mobile")
      : document.querySelector(".hidden-lang-toast");
    isOpenedLangToast
      ? toastElement?.classList.remove("lang-toast")
      : toastElement?.classList.add("lang-toast");
    setIsOpenedLangToast(!isOpenedLangToast);
  };

  const changeLangOption = (clickedLang: SelectOptionInterface) => {
    saveLocalData(AppConfig.KEYS.LANG, clickedLang.value);
    i18n.changeLanguage(clickedLang.value);
    setIsOpenedLangToast(false);
  };

  useEffect(() => {
    const toastElement: HTMLElement | null = props.isMobile
      ? document.querySelector(".hidden-lang-toast-mobile")
      : document.querySelector(".hidden-lang-toast");
    isOpenedLangToast
      ? toastElement?.classList.add("lang-toast")
      : toastElement?.classList.remove("lang-toast");
  }, [isOpenedLangToast]);

  return (
    <>
      <img
        onClick={openLangToast}
        src={process.env.PUBLIC_URL + "/assets/icons/lang.svg"}
        width="30px"
        height="4rem"
        alt="lang-icon"
      />
      <div
        className={
          props.isMobile ? "hidden-lang-toast-mobile" : "hidden-lang-toast"
        }
      >
        <ul>
          {langOptions &&
            langOptions.map((el) => {
              if (el.value === loadLocalData(AppConfig.KEYS.LANG)) {
                return (
                  <section className="checked-lang-wrapper">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/icons/check.svg"}
                      alt="check-icon"
                    />
                    <li onClick={() => changeLangOption(el)}>{el.label}</li>
                  </section>
                );
              }
              // @ts-ignore
              return <li onClick={() => changeLangOption(el)}>{el.label}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default LangToast;
