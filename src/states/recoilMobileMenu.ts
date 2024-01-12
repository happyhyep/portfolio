import { atom, selector } from "recoil";

export interface mobileMenu {
  value: boolean;
}

const initialMobileMenuState: mobileMenu = {
  value: false,
};

export const recoilMobileMenu = atom({
  key: "recoilMobileMenu",
  default: initialMobileMenuState,
});
