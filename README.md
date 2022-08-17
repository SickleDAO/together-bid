# Together Bid Smart Contract

## 安装

1、 安装依赖

```bash
npm install
```

2、创建 .env 文件

```bash
touch .env
```

设置运行环境

```bash
# 开发环境
echo 'NODE_ENV = "development"' >> .env

# or

# 生产环境
echo 'NODE_ENV = "production"' >> .env
```

3、设置对应环境的环境变量

```bash
# 开发环境
touch .env.development && cat .env.example > .env.development

# or

# 生产环境
touch .env.production && cat .env.example > .env.production
```

修改对应环境的值

## 测试

```bash
npm run check-balance
```

不出意外的话 会返回当前账号的 ETH 余额
