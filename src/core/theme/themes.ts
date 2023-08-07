import { theme01 } from "./theme01";
import { theme01_dark } from "./theme01_dark";
import { theme02 } from "./theme02";
import { theme02_dark } from "./theme02_dark";
import { theme03 } from "./theme03";
import { theme03_dark } from "./theme03_dark";
import { theme04 } from "./theme04";
import { theme04_dark } from "./theme04_dark";

type IThemes = {
  [propName in IThemeName]: {
    [propName: string]: any;
  };
};

export type IThemeName =
  | "theme01"
  | "theme02"
  | "theme03"
  | "theme04"
  | "theme01_dark"
  | "theme02_dark"
  | "theme03_dark"
  | "theme04_dark";

export interface IThemeItem {
  name: IThemeName;
  color: string;
}

export const themeList: IThemeItem[] = [
  {
    name: "theme01",
    color: theme01["--primary-color"],
  },
  {
    name: "theme02",
    color: theme02["--primary-color"],
  },
  {
    name: "theme03",
    color: theme03["--primary-color"],
  },
  {
    name: "theme04",
    color: theme04["--primary-color"],
  },
  {
    name: "theme01_dark",
    color: theme01_dark["--primary-color"],
  },
  {
    name: "theme02_dark",
    color: theme02_dark["--primary-color"],
  },
  {
    name: "theme03_dark",
    color: theme03_dark["--primary-color"],
  },
  {
    name: "theme04_dark",
    color: theme04_dark["--primary-color"],
  },
];

export const themes: IThemes = {
  theme01,
  theme02,
  theme03,
  theme04,
  theme01_dark,
  theme02_dark,
  theme03_dark,
  theme04_dark,
};
