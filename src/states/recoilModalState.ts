import { atom, selector } from "recoil";

export interface ModalState {
  value: boolean;
  src: string | null;
}

const initialModalState: ModalState = {
  value: false,
  src: null,
};

export const recoilModalState = atom({
  key: "recoilModalState",
  default: initialModalState,
});
