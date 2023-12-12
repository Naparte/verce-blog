# shell 常用命令

```shell
#!/bin/bash

# 递归查找front_end目录及其子目录下的所有ac_jquery.min.js文件并改名为ac_jquery.min.js
find ./ -type f -name "jquery-1.8.2.min.js" -exec bash -c 'mv -v "$0" "$(dirname "$0")/ac_jquery.min.js"' {} \; >> log.txt 2>&1

find ./ -type f -name "*.html" | xargs grep -l 'jquery-1.8.2.min.js' | xargs sed -i.bak 's/jquery-1.8.2.min.js/ac_jquery.min.js/g'; >> log.txt 2>&1

```
