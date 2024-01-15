import { projectImageList } from "src/data/projectImageList";

export const preloadImage = (page: string) => {
  const imgArray: { src: string }[] = [];
  projectImageList.map((item, index) => {
    imgArray[index] = new Image();
    imgArray[index].src = item.url;
  });
  // if (page === "ResultPage") {
  //   resultPagePreloadImageSet.map((item, index) => {
  //     imgArray[index] = new Image();
  //     imgArray[index].src = item.url;
  //   });
  // } else if (page === "SharePage") {
  //   sharePagePreloadImageSet.map((item, index) => {
  //     imgArray[index] = new Image();
  //     imgArray[index].src = item.url;
  //   });
  // } else {
  //   contentsImageList.map((item, index) => {
  //     imgArray[index] = new Image();
  //     imgArray[index].src = item.url;
  //   });
  // }
};
