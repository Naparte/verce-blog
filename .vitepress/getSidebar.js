import * as glob from "glob";
import path from "path";

function generateDirectoryTree(directoryPath) {
  const tree = [];

  const files = glob.sync("./home/**/*.md");

  for (const file of files) {
    const relativePath = path.relative(directoryPath, file);
    const parts = relativePath.split(path.sep);

    let currentNode = tree;

    for (let i = 0; i < parts.length - 1; i++) {
      const existingNode = currentNode.find((node) => node.text === parts[i]);

      if (existingNode) {
        currentNode = existingNode.items;
      } else {
        const newNode = {
          text: parts[i],
          items: [],
        };
        currentNode.push(newNode);
        currentNode = newNode.items;
      }
    }

    const fileName = path.basename(file, ".md");
    currentNode.push({
      text: fileName,
      link: file.replace(".md", ""),
    });
  }

  return dictionarySort(tree);
}

//字典排序
function dictionarySort(arr) {
  arr.sort(function (itemA, itemB) {
    let a = itemA.text;
    let b = itemB.text;
    let i = 0;
    if (!a.items) {
      return -1;
    }
    while (a.charAt(i) === b.charAt(i)) {
      i++;
    }
    return a.charCodeAt(i) - b.charCodeAt(i);
  });
  return arr;
}

export const sidebar = generateDirectoryTree("home");

function getFirstItemLink(treeArr) {
  let firstitem = treeArr[0];
  if (firstitem && !firstitem.items) {
    return firstitem.link;
  }

  return getFirstItemLink(firstitem.items);
}

export const firstSidleLink = getFirstItemLink(sidebar);
