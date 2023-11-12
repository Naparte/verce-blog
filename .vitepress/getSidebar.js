import * as glob from "glob";
import path from "path";

function generateDirectoryTree(directoryPath) {
  const tree = [];

  const files = glob.sync(path.join(directoryPath, "**/*.md"));

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

  return tree;
}

export const sidebar = generateDirectoryTree("home");
