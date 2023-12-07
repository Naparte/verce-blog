/**
 * 比较两个 Windows 文件路径的函数
 * @param {string} a - 第一个文件路径
 * @param {string} b - 第二个文件路径
 * @returns {number} - 返回值为负数表示 a 应排在 b 前面，为正数表示 b 应排在 a 前面，为 0 表示两者相等
 */
export function compareWindowsFilePaths(a, b) {
  // 将文件路径按照路径分隔符进行拆分
  const partsA = a.split(/[\\/]/);
  const partsB = b.split(/[\\/]/);

  // 逐层比较文件路径的各个部分
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const nameA = partsA[i] ? partsA[i].toLowerCase() : "";
    const nameB = partsB[i] ? partsB[i].toLowerCase() : "";

    // 检查是否为目录
    const isDirectoryA =
      i < partsA.length - 1 ||
      (i === partsA.length - 1 && !nameA.includes("."));
    const isDirectoryB =
      i < partsB.length - 1 ||
      (i === partsB.length - 1 && !nameB.includes("."));

    // 目录优先排在文件前面
    if (isDirectoryA && !isDirectoryB) {
      return -1;
    }
    if (!isDirectoryA && isDirectoryB) {
      return 1;
    }

    // 如果是数字开头的文件名，要按数字大小进行排序
    if (!isNaN(parseInt(nameA[0])) && !isNaN(parseInt(nameB[0]))) {
      const numA = parseInt(nameA);
      const numB = parseInt(nameB);
      if (numA < numB) {
        return -1;
      }
      if (numA > numB) {
        return 1;
      }
    }

    // 按照文件名的字母顺序进行排序
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  }

  // 如果文件路径的前面部分相同，则按照路径的长度进行排序
  if (partsA.length < partsB.length) {
    return -1;
  }
  if (partsA.length > partsB.length) {
    return 1;
  }

  // 如果文件路径完全相同，则按照原始顺序排序
  return 0;
}
