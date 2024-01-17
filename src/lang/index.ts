import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AppConfig from "src/constants";
import { loadLocalData } from "src/utils/common-util";
import ko from "./locale/ko.json";
import en from "./locale/en.json";
import jp from "./locale/jp.json";

// 사용 가능 언어
export const SUPPORT_LOCALES = ["ko", "en", "jp"];

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
  jp: {
    translation: jp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: loadLocalData(AppConfig.KEYS.LANG) || "ko", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
  fallbackLng: "ko", // 번역 파일에서 찾을 수 없는 경우 기본 언어
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
