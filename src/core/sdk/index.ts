import {
  CLSMetric,
  FCPMetric,
  INPMetric,
  LCPMetric,
  TTFBMetric,
} from "web-vitals";

let QUEUE: any[] = [];

type Metric = CLSMetric | FCPMetric | INPMetric | LCPMetric | TTFBMetric;

type OnReport = (metric: Metric) => void;

interface IAnyObject {
  [propName: string]: any;
}

const reportWebVitals = (onReport: OnReport) => {
  import("web-vitals").then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
    onCLS(onReport, {
      reportAllChanges: true,
    });
    onFCP(onReport, {
      reportAllChanges: true,
    });
    onINP(onReport, {
      reportAllChanges: true,
    });
    onLCP(onReport, {
      reportAllChanges: true,
    });
    onTTFB(onReport, {
      reportAllChanges: true,
    });
  });
};

export interface EasyAgentSDKOptions {
  appId: string;
  baseUrl: string;
  onPageShow: null | Function;
  onPageHide: null | Function;
  actionTypes: string[];
}

export default class EasyAgentSDK {
  appId = "";
  baseUrl = "";
  config = {};
  onPageShow: null | Function = null;
  onPageHide: null | Function = null;
  actionTypes: string[] = [];
  constructor(options: EasyAgentSDKOptions) {
    if (window?.SDK) return;
    window.SDK = this;
    this.appId = options.appId;
    this.baseUrl = options.baseUrl;
    this.onPageShow = options.onPageShow;
    this.onPageHide = options.onPageHide;
    this.actionTypes = options.actionTypes;

    this.listenPage();
  }

  setConfig(config: IAnyObject) {
    this.config = config;
  }

  flushQueue() {
    Promise.resolve().then(() => {
      QUEUE.forEach((fn) => fn());
      QUEUE.length = 0;
    });
  }

  listenPage() {
    let pageShowTime = 0;

    window.addEventListener("pageshow", () => {
      pageShowTime = performance.now();
      reportWebVitals((data: Metric) => {
        this.performanceReport(data);
      });
      this.onPageShow?.();
      this.flushQueue();
    });

    window.addEventListener("pagehide", () => {
      console.log(`页面停留时间：${performance.now() - pageShowTime}`);

      this.onPageHide?.();
      this.flushQueue();
    });

    document.addEventListener("click", (e: any) => {
      if (this.actionTypes.includes(e.target?.dataset?.sdk)) {
        this.actionReport({
          actionType: e.target?.dataset?.sdk,
        });
      }
    });
  }

  json2FormData(data: IAnyObject) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      let value: any = null;
      if (value instanceof Blob) {
        value = data[key];
      } else {
        value = JSON.stringify(data[key]);
      }
      formData.append(key, value);
    });
    return formData;
  }

  report(config: IAnyObject) {
    QUEUE.push(() => {
      const formData = this.json2FormData({
        ...config,
        time: new Date().toLocaleString(),
        appId: this.appId,
        pageUrl: window.location.href,
      });
      navigator.sendBeacon(this.baseUrl, formData);
    });
  }

  actionReport(config: IAnyObject) {
    this.report({
      ...config,
      type: "action",
    });
  }

  networkReport(config: IAnyObject) {
    this.report({
      ...config,
      type: "network",
    });
  }

  performanceReport(config: IAnyObject) {
    this.report({
      ...config,
      type: "performance",
    });
  }

  errorReport(config: IAnyObject) {
    this.report({
      ...config,
      type: "error",
    });
  }
}
