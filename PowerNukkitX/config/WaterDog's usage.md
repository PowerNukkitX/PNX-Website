# How to use WaterDogPE forwarding server in PNX

## If server open online verification

1. Modify the following configuration in the WaterDog's config.yml
`online_mode=true` `use_login_extras=true` and `upstream_encryption: false`
2. Modify the `xbox-auth=on` in your server.properties for each sub-server
3. Modify `waterdogpe: true` in your nukkit.yml for each sub-server

## If server close online verification

1. Modify `online_mode=false` and `upstream_encryption: false` in the WaterDog configuration file config.yml
2. Modify the `xbox-auth=off` in your server.properties for each sub-server