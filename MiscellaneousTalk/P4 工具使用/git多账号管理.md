# git 多账号管理

- 解决问题：同一台电脑，N 个 github 账号同时存在，需要对应 N 个 github 账号的 SSH key

## 步骤

1. 运行 git Bash 客户端，输入如下代码：

```shell
$ cd ~/.ssh
$ ls
```

2. 创建一个 SSH key

```shell
$ ssh-keygen -t rsa -C "your_email@example.com" -f your_ras_name

# 代码参数含义：

# -t 指定密钥类型，默认是 rsa ，可以省略
# -C 设置注释文字，比如邮箱
# -f 指定密钥文件存储文件名 ，多个账号必须区分，默认是 id_rsa 会重名
```

3. 添加你的 SSH key 到 github 上面去

```shell
$ clip < ~/.ssh/id_rsa.pub
```

4. 在.ssh 文件夹中手动创建 config 文件

```shell
# 配置
Host 自定义别名，随意，但会影响git相关命令（建议取账号user.name 或 账号邮箱user.email）
HostName 远程仓库真实域名(github.com或git.oschina.net) 或 ip地址
PreferredAuthentications publickey
IdentityFile 本地私钥id_rsa的路径
User 配置使用用户名，写账号user.name或写git就行
# Port 端口号（默认22）

```

demo

```shell
# naparte

Host naparte
HostName github.com
PreferredAuthentications publickey
IdentityFile C:\Users\User\.ssh\naparte
User naparte

# Port 端口号（默认 22）

# hzh

Host hzh
HostName github.com
PreferredAuthentications publickey
IdentityFile C:\Users\User\.ssh\id_rsa
User hzh

# Port 端口号（默认 22）

```

5. 测试连接

```shell
$ ssh -T git@naparte
# You've successfully authenticated, but GitHub does not provide shell access 提示这个表示成功了
```

6. 拉取项目

```shell
git clone git@github.com:naparte/yourblog.git
# 改为(@后面改成你的host名称)
git clone git@naparte:naparte/yourblog.git
```

8. 解决老项目 git pull 需要输入密码的问题

```shell
# 一是直接修改远程仓库的URL
git remote set-url origin git@Host别名:gitrepo

# 二是先remote rm再remote add
git remote rm origin
git remote add origin git@Host别名:gitrepo
```

## 参考文献

- [Git 多账号管理](https://juejin.cn/post/6909675192532860941#heading-6)
