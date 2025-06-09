# 组件编写规则说明

组件发布流程

# 1.获取当前源

npm get registry https://registry.npmmirror.com/

# 2.还原为官方源

npm config set registry https://registry.npmjs.com/

# 3.忽略ssl验证证书

npm config set strict-ssl false

# 4.发布

npm publish

# 5.发布成功后，还原为淘宝镜像源

npm config set registry https://registry.npmmirror.com/
