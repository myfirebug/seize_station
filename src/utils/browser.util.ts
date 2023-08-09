export const browserUtil = {
  NAV: window.navigator,
  UA() {
    return this.NAV.userAgent.toLowerCase();
  },
  isIpad() {
    return /ipad/i.test(this.UA());
  },

  isIphone() {
    return /iphone/i.test(this.UA());
  },
  isIpod() {
    return /ipod/i.test(this.UA());
  },
  isIos() {
    return /ipad|iphone|ipod/i.test(this.UA());
  },
  isAndroid() {
    return /android/i.test(this.UA());
  },
  isIe() {
    return /(trident|microsoft)/i.test(this.NAV ? this.NAV.appName : "");
  },
  isMobile() {
    return this.isIphone || this.isIos || this.isAndroid;
  },
  isChrome() {
    return /chrome/i.test(this.UA());
  },
  isFirefox() {
    return /firefox/i.test(this.UA());
  },
  isOpera() {
    return /opera/i.test(this.UA());
  },
  isSafari() {
    return /safari/i.test(this.UA());
  },
  isEdge() {
    return /edge/i.test(this.UA());
  },
  isWechat() {
    return /micromessenger/i.test(this.UA());
  },
  isQqbrowser() {
    return /qqbrowser/i.test(this.UA());
  },
  isUcbrowser() {
    return /ucbrowser/i.test(this.UA());
  },
  // 判断video标签在5大主流浏览器能否使用 国内浏览器兼容大
  isVideo() {
    return (
      this.isChrome ||
      this.isFirefox ||
      this.isOpera ||
      this.isSafari ||
      this.isEdge
    );
  },
  //判断浏览器是否支持css var变量
  isCssVar() {
    return window.CSS && window.CSS.supports && window.CSS.supports("--a", "0");
  },
};
