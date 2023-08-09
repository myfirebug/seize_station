export const urlUtil = {
  /**
   * 获取参数值
   * @param name
   * @param url
   * @returns {any}
   */
  getUrlParam(name: string, url?: string): string {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let result =
      (url || window.location.href).split("?").length > 1 &&
      (url || window.location.href).split("?")[1].match(reg);
    return result ? decodeURIComponent(result[2]) : "";
  },

  /**
   * 修改url参数
   * @param paramName
   * @param replaceWith
   * @param url
   * @returns {string}
   */
  replaceParamVal(paramName: string, replaceWith: string, url: string): string {
    let oUrl = url || window.location.href;
    // eslint-disable-next-line no-eval
    let re = eval("/(" + paramName + "=)([^&]*)/gi");
    let nUrl = oUrl.replace(re, paramName + "=" + replaceWith);
    return nUrl;
  },
};
