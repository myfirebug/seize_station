interface Config {
  // 站点名称
  sitename: string;
  // 站点标题
  title: string;
  // 站点描述
  description: string;
  // 站点关键词
  keywords: string;
  // 开发环境接口地址
  developmentApi: string;
  // 正式环境接口地址
  productionApi: string;
  // 移动端底部tabbar
  mobileTabBar: { name: string; path: string }[];
  // 每个站点的loading不一样
  injectLoading: string;
}

interface Window {
  CONFIG: Config;
}
