import { STACK_NAME } from "src/types/enum";

export interface EducationData {
  period: string | undefined;
  name: string;
}

export interface AwardData {
  key: string;
  name: string;
  img: string;
}

export interface SelectOptionInterface {
  value: string;
  label: string;
}

export interface ProjectDataInterface {
  idx: number;
  img: string;
  title: string;
  subtitle: string;
  user: string | null;
  strongStacks: STACK_NAME[];
  stacks: STACK_NAME[] | null;
  desc: string[];
  isHaveWeb: boolean;
  isHaveGithub: boolean;
  isHaveVideo: boolean;
  isHaveAppStore: boolean;
  webLink: string | null;
  githubLink: string | null;
  videoLink: string | null;
  appLink: string | null;
}

export interface PreloadImgInterface {
  key: string;
  url: string;
}

export interface ActivityDataInterface {
  key: string;
  value: string;
  date: string;
}
