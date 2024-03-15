import { atom } from "recoil";

export interface guideComponent {
  value: boolean;
}

const initialGuideComponent: guideComponent = {
  value: true,
};

export const recoilGuideComponent = atom({
  key: "recoilGuideComponent",
  default: initialGuideComponent,
});
