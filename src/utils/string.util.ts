export const stringUtil = {
  /**
   * 去除空格
   * @param  {str}
   * @param  {type}
   *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
   * @return {String}
   */
  trim(str: string, type: 1 | 2 | 3 | 4): string {
    type = type || 1;
    switch (type) {
      case 1:
        return str.replace(/\s+/g, "");
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, "");
      case 3:
        return str.replace(/(^\s*)/g, "");
      case 4:
        return str.replace(/(\s*$)/g, "");
      default:
        return str;
    }
  },

  /**
   * @param  {str}
   * @param  {type}
   *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
   * @return {String}
   */
  changeCase(str: string, type: 1 | 2 | 3 | 4 | 5): string {
    type = type || 4;
    switch (type) {
      case 1:
        return str.replace(/\b\w+\b/g, function (word) {
          return (
            word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
          );
        });
      case 2:
        return str.replace(/\b\w+\b/g, function (word) {
          return (
            word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
          );
        });
      case 3:
        return str
          .split("")
          .map(function (word) {
            if (/[a-z]/.test(word)) {
              return word.toUpperCase();
            } else {
              return word.toLowerCase();
            }
          })
          .join("");
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  },

  /*过滤html代码(把<>转换)*/
  filterTag(str: string) {
    str = str.replace(/&/gi, "&amp;");
    str = str.replace(/</gi, "&lt;");
    str = str.replace(/>/gi, "&gt;");
    str = str.replace(" ", "&nbsp;");
    return str;
  },
};
