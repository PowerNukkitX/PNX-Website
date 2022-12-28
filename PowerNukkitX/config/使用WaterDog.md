# 如何在PNX使用WaterDogPE转发服务器

## 服务器开启正版验证

1. 修改WaterDog 配置文件config.yml中的`online_mode=true`和`use_login_extras=true`
2. 修改 WaterDog 配置文件config.yml中的`upstream_encryption: false`
3. 修改你每个子服server.properties中的`xbox-auth=on`
4. 修改你每个子服nukkit.yml中的`waterdogpe: true`

## 服务器不开启正版验证

1. 修改 WaterDog 配置文件config.yml中的`online_mode=false`
2. 修改 WaterDog 配置文件config.yml中的`upstream_encryption: false`
3. 修改你每个子服server.properties中的`xbox-auth=off`