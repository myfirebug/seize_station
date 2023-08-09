export const typeUtil = {
  isString(o: any) {
    //是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === "String";
  },

  isNumber(o: any) {
    //是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === "Number";
  },

  isBoolean(o: any) {
    //是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
  },

  isFunction(o: any) {
    //是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === "Function";
  },

  isNull(o: any) {
    //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === "Null";
  },

  isUndefined(o: any) {
    //是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
  },

  isObj(o: any) {
    //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Object";
  },

  isArray(o: any) {
    //是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === "Array";
  },

  isDate(o: any) {
    //是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === "Date";
  },

  isRegExp(o: any) {
    //是否正则
    return Object.prototype.toString.call(o).slice(8, -1) === "RegExp";
  },

  isError(o: any) {
    //是否错误对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Error";
  },

  isSymbol(o: any) {
    //是否Symbol函数
    return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
  },

  isPromise(o: any) {
    //是否Promise对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
  },

  isSet(o: any) {
    //是否Set对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Set";
  },

  isFalse(o: any) {
    if (
      o === "" ||
      o === undefined ||
      o === null ||
      o === "null" ||
      o === "undefined" ||
      o === 0 ||
      o === false
    )
      return true;
    return false;
  },

  isTrue(o: any) {
    return !this.isFalse(o);
  },

  checkStr(str: string, type: string) {
    switch (type) {
      case "phone": //手机号码
        return /^1[3|4|5|6|7|8][0-9]{9}$/.test(str);
      case "tel": //座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case "card": //身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
      case "pwd": //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str);
      case "postal": //邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str);
      case "QQ": //QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case "email": //邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case "money": //金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str);
      case "URL": //网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/.test(
          str
        );
      case "IP": //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
          str
        );
      case "date": //日期时间
        return (
          /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(
            str
          ) || /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
        );
      case "number": //数字
        return /^[0-9]$/.test(str);
      case "english": //英文
        return /^[a-zA-Z]+$/.test(str);
      case "chinese": //中文
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case "lower": //小写
        return /^[a-z]+$/.test(str);
      case "upper": //大写
        return /^[A-Z]+$/.test(str);
      case "HTML": //HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      default:
        return true;
    }
  },
};
