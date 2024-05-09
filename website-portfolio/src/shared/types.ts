export enum SelectedPage {
  Home = "home",
  Resume = "resume",
  Contact = "contact",
}

export type fullstackProject = {
  id: number;
  type: string;
  name: string;
  description: string;
  technologies: Array<string>;
  videoSrc: string;
  githubLink: string;
  url: string;
  youtubeLink: string;
};

export type bubbleProject = {
  id: number;
  type: string;
  name: string;
  description: string;
  technologies: Array<string>;
  videoSrc: string;
  url: string;
  youtubeLink: string;
};

export type HoverStates = {
  [key: number]: boolean;
};
