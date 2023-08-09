export const numberUtil = {
  /*随机数范围*/
  random(min: number, max: number) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
      return null;
    }
  },
};
