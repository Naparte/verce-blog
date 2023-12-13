const data = {
  name: "Naparte",
  sex: 0,
  role: 1,
  time: new Date().getTime(),
};
const invite = function (arrs, nameExp, sexExp, roleExp, timeExp) {
  let strName = nameExp;
  // 性别处理
  let strSex = ["先生", "女士"][sexExp];
  // 角色处理
  const role = {
    1: "微前端",
    2: "webpack",
    3: "可视化",
    4: "工程化",
  };
  let strRole = role[roleExp];
  // 日期处理
  let strTime = new Date(timeExp).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 输出内容
  let output = [arrs[0]];

  [strName, strSex, strRole, strTime].forEach((str, index) => {
    output.push(str, arrs[index + 1] || "");
  });

  return output.join("");
};

let content = invite`诚挚邀 ${data.name}${data.sex}，作为 ${data.role} 领域优秀开发，参加${data.time}度FrontEnd前端技术大会。本次大会旨在为广大前端开发者提供一个交流、学习和展示的平台，共同探讨前端技术的最新趋势和发展方向。主办方：深圳市前端开发者协会`;

console.log(content);
// 诚挚邀 Naparte先生，作为 微前端 领域优秀开发，参加2023年12月13日度FrontEnd前端技术大会。本次大会旨在为广大前端开发者提供一个交流、学习和展示的平台，共同探讨前端技术的最新趋势和发展方向。主办方：深圳市前端
// 开发者协会;
