export const storageUtil = {
  ls: window.localStorage,
  ss: window.sessionStorage,

  /*-----------------cookie---------------------*/
  /*设置cookie*/
  setCookie(name: string, value: any, day: any) {
    let setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === "Object") {
      for (let i in setting) {
        let oDate = new Date();
        oDate.setDate(oDate.getDate() + day);
        document.cookie = i + "=" + setting[i] + ";expires=" + oDate;
      }
    } else {
      let oDate = new Date();
      oDate.setDate(oDate.getDate() + day);
      document.cookie = name + "=" + value + ";expires=" + oDate;
    }
  },

  /*获取cookie*/
  getCookie(name: string) {
    let arr = document.cookie.split("; ");
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i].split("=");
      if (arr2[0] === name) {
        return arr2[1];
      }
    }
    return "";
  },

  /*删除cookie*/
  removeCookie(name: string) {
    this.setCookie(name, 1, -1);
  },

  /*-----------------localStorage---------------------*/
  /*设置localStorage*/
  setLocal(key: string, val: any) {
    let setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === "Object") {
      for (let i in setting) {
        this.ls.setItem(i, JSON.stringify(setting[i]));
      }
    } else {
      this.ls.setItem(key, JSON.stringify(val));
    }
  },

  /*获取localStorage*/
  getLocal(key: string): string | null {
    if (key) return JSON.parse(this.ls.getItem(key) as string);
    return null;
  },

  /*移除localStorage*/
  removeLocal(key: any) {
    this.ls.removeItem(key);
  },

  /*移除所有localStorage*/
  clearLocal() {
    this.ls.clear();
  },

  /*-----------------sessionStorage---------------------*/
  /*设置sessionStorage*/
  setSession(key: any, val: any) {
    let setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === "Object") {
      for (let i in setting) {
        this.ss.setItem(i, JSON.stringify(setting[i]));
      }
    } else {
      this.ss.setItem(key, JSON.stringify(val));
    }
  },

  /*获取sessionStorage*/
  getSession(key: any) {
    if (key) return JSON.parse(this.ss.getItem(key) as string);
    return null;
  },

  /*移除sessionStorage*/
  removeSession(key: any) {
    this.ss.removeItem(key);
  },

  /*移除所有sessionStorage*/
  clearSession() {
    this.ss.clear();
  },
};
