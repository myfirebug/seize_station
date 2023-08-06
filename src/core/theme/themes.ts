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

export const themeList: IThemeName[] = [
  "theme01",
  "theme02",
  "theme03",
  "theme04",
  "theme01_dark",
  "theme02_dark",
  "theme03_dark",
  "theme04_dark",
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
