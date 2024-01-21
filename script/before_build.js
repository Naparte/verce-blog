// 导入fs-extra模块
import fs from "fs-extra";
import yaml from "js-yaml";

async function readAndParseYmlFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const ymlObject = yaml.load(fileContent);
    console.log("parseYml", ymlObject);
    return ymlObject;
  } catch (error) {
    return {};
  }
}

const files = [
  {
    sourceDir: "./thirdpartys/typescript-tutorial/docs",
    depYml: await readAndParseYmlFile("./Books/P1 阮一峰的TS教程/chapters.yml"),
    targetDir: "./Books/P1 阮一峰的TS教程",
  },
  {
    sourceDir: "./thirdpartys/es6tutorial/docs",
    depYml: await readAndParseYmlFile(
      "./Books/P2 阮一峰的ES6教程/chapters.yml"
    ),

    targetDir: "./Books/P2 阮一峰的ES6教程",
  },
];

// 异步复制目录及其内容的函数
async function copyDirectory({ sourceDir, targetDir, depYml }) {
  try {
    if (depYml) {
      Object.keys(depYml).forEach(async (key, index) => {
        let item = Object.entries(depYml[key])[0];
        await fs.copy(
          `${sourceDir}/${item[0]}`,
          `${targetDir}/${index + 1}.${item[1]}.md`,
          {
            overwrite: true,
          }
        );
      });
    } else {
      await fs.copy(sourceDir, targetDir, { overwrite: true });
    }
  } catch (err) {
    console.error("目录复制过程中发生错误：", err);
  }
}

// 执行复制操作

files.forEach(async (item) => {
  await copyDirectory(item);
});
