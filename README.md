## 快速开始

### 环境准备

确保你已安装

- Git
- npm
- Node.js >= 20
- Docker、Docker Compose


### 安装依赖

在项目根目录下运行以下命令安装项目依赖：

```shell
npm install
```

### 准备数据库

开发环境，推荐使用 Docker Compose 启动一个 MySQL，项目已经准备好了一个 `docker-compose.yaml` 文件

`docker-compose.yaml`内配置请按需更改



在项目根目录下运行

```shell
# Docker Compose 启动全部服务
docker-compose up -d
```




### 准备 env 文件和配置

#### 配置 `.env` 文件

> `.env` 文件主要是给 Prisma 用的，Prisma 读取 DATABASE_URL 进行数据库连接

新建一个 `.env` 文件，在 `.env` 文件新增以下内容

```.env
# DATABASE_URL 格式为 mysql://用户名:用户密码@数据库IP:数据库端口/需要连接的数据库名
# 根据实际情况进行修改
DATABASE_URL="mysql://root:123456@127.0.0.1:3306/user"
```


### 启动开发服务器

1. 创建表

```shell
npm run db:push
```

2. 生成 Prisma 类型文件

```shell
npm run db:gen
```

3. 启动开发服务器

```shell
npm run dev
```