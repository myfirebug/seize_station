export const otherUtil = {
  /**
   * 防抖动
   * @param  {Function} fn        [执行的函数]
   * @param  {[type]}   delay     [多少秒之后执行]
   * @param  {[type]}   immediate [是否立即执行]
   * @return {[type]}             []
   */
  debounce(fn: Function, delay: number, immediate: boolean) {
    let timeout: any;
    return function (this: any, ...args: any[]) {
      let context = this;
      let later = function () {
        timeout = null;
        if (!immediate) fn.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
      if (callNow) fn.apply(context, args);
    };
  },

  /**
   * 节流
   * @param  {[type]} func  [执行的函数]
   * @param  {[type]} delay [多少秒之内执行一次]
   * @return {[type]}       [description]
   */
  throttle(func: Function, delay: number) {
    let prev = Date.now();
    return function (this: any, ...args: any[]) {
      let context = this;
      let now = Date.now();
      if (now - prev >= delay) {
        func.apply(context, args);
        prev = Date.now();
      }
    };
  },
};
