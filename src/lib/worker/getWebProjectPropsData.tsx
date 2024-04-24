import { ProjectDataInterface } from "src/types/type";
import { STACK_NAME } from "src/types/enum";
import { useTranslation } from "react-i18next";

export default function getWebProjectPropsData() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  const propsObj: ProjectDataInterface[] = [
    {
      idx: 9,
      img: process.env.PUBLIC_URL + "/assets/images/projects/world-esim.webp",
      title: t("projects.esim.title"),
      subtitle: t("projects.esim.subtitle"),
      user: t("projects.esim.user"),
      strongStacks: [
        STACK_NAME.VUE,
        STACK_NAME.TYPESCRIPT,
        STACK_NAME.SASS,
        STACK_NAME.NODE,
        STACK_NAME.POSTGRESQL,
        STACK_NAME.S3,
      ],
      stacks: [STACK_NAME.DOCKER, STACK_NAME.JENKINS, STACK_NAME.FIGMA],
      desc: [
        t("projects.esim.desc-1"),
        t("projects.esim.desc-2"),
        t("projects.esim.desc-3"),
        t("projects.esim.desc-4"),
        t("projects.esim.desc-5"),
      ],
      isHaveWeb: true,
      isHaveGithub: false,
      isHaveVideo: false,
      isHaveAppStore: false,
      webLink: "https://www.pre-esim.shop/",
      githubLink: null,
      videoLink: null,
      appLink: null,
    },
    {
      idx: 8,
      img:
        process.env.PUBLIC_URL +
        "/assets/images/projects/world-esim-admin.webp",
      title: t("projects.esim-admin.title"),
      subtitle: t("projects.esim-admin.subtitle"),
      user: t("projects.esim-admin.user"),
      strongStacks: [
        STACK_NAME.VUE,
        STACK_NAME.TYPESCRIPT,
        STACK_NAME.SASS,
        STACK_NAME.NODE,
        STACK_NAME.POSTGRESQL,
        STACK_NAME.S3,
      ],
      stacks: [STACK_NAME.DOCKER, STACK_NAME.JENKINS, STACK_NAME.FIGMA],
      desc: [
        t("projects.esim-admin.desc-1"),
        t("projects.esim-admin.desc-2"),
        t("projects.esim-admin.desc-3"),
        t("projects.esim-admin.desc-4"),
        t("projects.esim-admin.desc-5"),
      ],
      isHaveWeb: true,
      isHaveGithub: false,
      isHaveVideo: false,
      isHaveAppStore: false,
      webLink: "https://www.admin.pre-esim.shop/login",
      githubLink: null,
      videoLink: null,
      appLink: null,
    },
    {
      idx: 7,
      img: process.env.PUBLIC_URL + "/assets/images/projects/nfm-trd-2023.webp",
      title: t("projects.nfm-trd.title"),
      subtitle: t("projects.nfm-trd.subtitle"),
      user: t("projects.nfm-trd.user"),
      strongStacks: [
        STACK_NAME.VUE,
        STACK_NAME.TYPESCRIPT,
        STACK_NAME.SASS,
        STACK_NAME.NODE,
        STACK_NAME.POSTGRESQL,
        STACK_NAME.S3,
      ],
      stacks: [STACK_NAME.DOCKER, STACK_NAME.JENKINS, STACK_NAME.FIGMA],
      desc: [
        t("projects.nfm-trd.desc-1"),
        t("projects.nfm-trd.desc-2"),
        t("projects.nfm-trd.desc-3"),
        t("projects.nfm-trd.desc-4"),
        t("projects.nfm-trd.desc-5"),
      ],
      isHaveWeb: true,
      isHaveGithub: false,
      isHaveVideo: false,
      isHaveAppStore: false,
      webLink: "https://nfm-trd-2023.apoc.day/#/",
      githubLink: null,
      videoLink: null,
      appLink: null,
    },
    {
      idx: 6,
      img: process.env.PUBLIC_URL + "/assets/images/projects/vote-share.svg",
      title: t("projects.vote-share.title"),
      subtitle: t("projects.vote-share.subtitle"),
      user: t("projects.vote-share.user"),
      strongStacks: [
        STACK_NAME.REACT,
        STACK_NAME.TYPESCRIPT,
        STACK_NAME.SASS,
        STACK_NAME.RECOIL,
        STACK_NAME.DOCKER,
        STACK_NAME.DOCKERCOMPOSE,
        STACK_NAME.EC2,
        STACK_NAME.FIGMA,
      ],
      stacks: [
        STACK_NAME.SPRING,
        STACK_NAME.MYSQL,
        STACK_NAME.REDIS,
        STACK_NAME.GOOGLEOAUTH,
      ],
      desc: [
        t("projects.vote-share.desc-1"),
        t("projects.vote-share.desc-2"),
        t("projects.vote-share.desc-3"),
        t("projects.vote-share.desc-4"),
        t("projects.vote-share.desc-5"),
      ],
      isHaveWeb: true,
      isHaveGithub: true,
      isHaveVideo: false,
      isHaveAppStore: false,
      webLink: "http://vote-share.o-r.kr",
      githubLink: "https://github.com/happyhyep/vote-share-fe",
      videoLink: null,
      appLink: null,
    },
    {
      idx: 5,
      img: process.env.PUBLIC_URL + "/assets/images/projects/focuz.webp",
      title: t("projects.focuz.title"),
      subtitle: t("projects.focuz.subtitle"),
      user: t("projects.focuz.user"),
      strongStacks: [
        STACK_NAME.REACT,
        STACK_NAME.TENSORFLOW,
        STACK_NAME.KAKAOOAUTH,
        STACK_NAME.STYLEDCOMPONENT,
      ],
      stacks: [STACK_NAME.SPRING, STACK_NAME.MYSQL, STACK_NAME.REDIS],
      desc: [
        t("projects.focuz.desc-1"),
        t("projects.focuz.desc-2"),
        t("projects.focuz.desc-3"),
        t("projects.focuz.desc-4"),
        t("projects.focuz.desc-5"),
      ],
      isHaveWeb: false,
      isHaveGithub: true,
      isHaveVideo: true,
      isHaveAppStore: false,
      webLink: null,
      githubLink: "https://github.com/happyhyep/FOCUZ",
      videoLink: process.env.PUBLIC_URL + "/assets/images/projects/focuz.mp4",
      appLink: null,
    },
    {
      idx: 4,
      img: process.env.PUBLIC_URL + "/assets/images/projects/BBuRing.webp",
      title: t("projects.bburing.title"),
      subtitle: t("projects.bburing.subtitle"),
      user: null,
      strongStacks: [STACK_NAME.REACT, STACK_NAME.DOCKER],
      stacks: [STACK_NAME.SPRING, STACK_NAME.PYTHON, STACK_NAME.MYSQL],
      desc: [
        t("projects.bburing.desc-1"),
        t("projects.bburing.desc-2"),
        t("projects.bburing.desc-3"),
        t("projects.bburing.desc-4"),
        t("projects.bburing.desc-5"),
      ],
      isHaveWeb: false,
      isHaveGithub: true,
      isHaveVideo: true,
      isHaveAppStore: false,
      webLink: null,
      githubLink: "https://github.com/happyhyep/BBuRing_log",
      videoLink: process.env.PUBLIC_URL + "/assets/images/projects/BBuRing.mp4",
      appLink: null,
    },
    {
      idx: 3,
      img: process.env.PUBLIC_URL + "/assets/images/projects/eclipse.webp",
      title: t("projects.eclipse.title"),
      subtitle: t("projects.eclipse.subtitle"),
      user: null,
      strongStacks: [STACK_NAME.REACT],
      stacks: [STACK_NAME.DJANGO],
      desc: [
        t("projects.eclipse.desc-1"),
        t("projects.eclipse.desc-2"),
        t("projects.eclipse.desc-3"),
        t("projects.eclipse.desc-4"),
        t("projects.eclipse.desc-5"),
      ],
      isHaveWeb: false,
      isHaveGithub: true,
      isHaveVideo: true,
      isHaveAppStore: false,
      webLink: null,
      githubLink: "https://github.com/happyhyep/Eclipse",
      videoLink: process.env.PUBLIC_URL + "/assets/images/projects/eclipse.mp4",
      appLink: null,
    },
    {
      idx: 2,
      img: process.env.PUBLIC_URL + "/assets/images/projects/gallery.webp",
      title: t("projects.gallery.title"),
      subtitle: t("projects.gallery.subtitle"),
      user: null,
      strongStacks: [STACK_NAME.REACT],
      stacks: [STACK_NAME.FIREBASE],
      desc: [
        t("projects.gallery.desc-1"),
        t("projects.gallery.desc-2"),
        t("projects.gallery.desc-3"),
        t("projects.gallery.desc-4"),
        t("projects.gallery.desc-5"),
      ],
      isHaveWeb: false,
      isHaveGithub: true,
      isHaveVideo: true,
      isHaveAppStore: false,
      webLink: null,
      githubLink: "https://github.com/happyhyep/gallery-web",
      videoLink: process.env.PUBLIC_URL + "/assets/images/projects/gallery.mp4",
      appLink: null,
    },
    {
      idx: 1,
      img: process.env.PUBLIC_URL + "/assets/images/projects/apartment.webp",
      title: t("projects.apartment.title"),
      subtitle: t("projects.apartment.subtitle"),
      user: null,
      strongStacks: [STACK_NAME.VANILLAJS, STACK_NAME.EC2],
      stacks: [STACK_NAME.OPENAPI],
      desc: [
        t("projects.apartment.desc-1"),
        t("projects.apartment.desc-2"),
        t("projects.apartment.desc-3"),
        t("projects.apartment.desc-4"),
        t("projects.apartment.desc-5"),
      ],
      isHaveWeb: false,
      isHaveGithub: true,
      isHaveVideo: false,
      isHaveAppStore: false,
      webLink: null,
      githubLink:
        "https://github.com/happyhyep/project_search_for_apart_transactions",
      videoLink: null,
      appLink: null,
    },
  ];

  return propsObj;
}
