//alerter.js文件
// 定义有依赖的模块
define(["dataService"], function (dataService) {
  let name = "xianzao";
  function showMsg() {
    alert(dataService.getMsg() + ", " + name);
  }
  // 暴露模块
  return { showMsg };
});
