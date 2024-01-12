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
  webLink: string | null;
  githubLink: string | null;
  videoLink: string | null;
}
