import { ProjectDataInterface } from "src/types/type";
import { STACK_NAME } from "src/types/enum";
import { useTranslation } from "react-i18next";

export default function getIosProjectPropsData() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  const propsObj: ProjectDataInterface[] = [
    {
      idx: 2,
      img: process.env.PUBLIC_URL + "/assets/images/projects/dreamary.svg",
      title: t("projects.dreamary.title"),
      subtitle: t("projects.dreamary.subtitle"),
      user: null,
      strongStacks: [STACK_NAME.SWIFT],
      stacks: [STACK_NAME.SWIFTUI],
      desc: [
        t("projects.dreamary.desc-1"),
        t("projects.dreamary.desc-2"),
        t("projects.dreamary.desc-3"),
      ],
      isHaveWeb: false,
      isHaveGithub: false,
      isHaveVideo: true,
      webLink: null,
      githubLink: null,
      videoLink:
        process.env.PUBLIC_URL + "/assets/images/projects/dreamary.mp4",
    },
    {
      idx: 1,
      img: process.env.PUBLIC_URL + "/assets/images/projects/travrec.svg",
      title: t("projects.travrec.title"),
      subtitle: t("projects.travrec.subtitle"),
      user: null,
      strongStacks: [STACK_NAME.SWIFT],
      stacks: [STACK_NAME.SWIFTUI],
      desc: [
        t("projects.travrec.desc-1"),
        t("projects.travrec.desc-2"),
        t("projects.travrec.desc-3"),
      ],
      isHaveWeb: false,
      isHaveGithub: true,
      isHaveVideo: false,
      webLink: null,
      githubLink: "https://github.com/happyhyep/TravRec",
      videoLink: null,
    },
  ];

  return propsObj;
}
