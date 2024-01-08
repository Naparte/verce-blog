const fs = require("fs");
const babylon = require("babylon");

function createAsset(filename) {
  const content = fs.readFileSync(filename, "utf-8");

  const ast = babylon.parse(content, {
    sourceType: "module",
  });
}

createAsset("./example/entry");
