import { commonImageList } from "src/data/commonImageList";

export const preloadImage = (page: string) => {
  const imgArray: HTMLImageElement[] = [];

  commonImageList.map((item, index) => {
    imgArray[index] = new Image();
    imgArray[index].src = item.url;
  });
};
