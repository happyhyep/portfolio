import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AppConfig from "src/constants";
import { loadLocalData, saveLocalData } from "src/utils/common-util";
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
//
// // i18n 객체 생성
// export function setupI18n(
//   options: I18nOptions = { locale: "ko" },
// ): I18n<any, any, any, any> {
//   const i18n = createI18n(options);
//   setI18nLanguage(i18n, options.locale || "ko");
//   return i18n;
// }
//
// // html문서에 언어 추가
// export function setI18nLanguage(
//   i18n: I18n<any, any, any, any>,
//   locale: string,
// ): void {
//   i18n.global.locale = locale;
//
//   const el = window.document.querySelector("html") as HTMLElement;
//   el.setAttribute("lang", locale);
// }
//
// // locale별 json 파일 불러오기
// export async function loadLocaleMessages(
//   i18n: I18n<any, any, any, any>,
//   locale: string,
// ): Promise<void> {
//   const messages = await import(`./locale/${locale}.json`);
//
//   i18n.global.setLocaleMessage(locale, messages.default);
//
//   return nextTick();
// }
//
// export const setLanguage = (lang: string) => {
//   if (loadLocalData(AppConfig.KEYS.LANG)) {
//     return;
//   }
//   switch (lang) {
//     case "ko":
//     case "ko-KR":
//       saveLocalData(AppConfig.KEYS.LANG, "ko");
//       break;
//     case "en-US":
//       saveLocalData(AppConfig.KEYS.LANG, "en");
//       break;
//     case "jp":
//       saveLocalData(AppConfig.KEYS.LANG, "jp");
//       break;
//     default:
//       saveLocalData(AppConfig.KEYS.LANG, "ko");
//       break;
//   }
// };
