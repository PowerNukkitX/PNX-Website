# Resource package encryption

The resource package encryption here only means that PowerNukkitX supports you to use the resource package encrypted by you. You only need to configure a 32-key for your resource package according to the following tutorial to enable the player client to load normally.

Please note that resource package encryption cannot completely prevent people with ulterior motives from stealing your resource package, because it is `AES` symmetric key encryption.

Just 3 steps, keep up and get started!

## 1. Encrypt my resource pack

In some sites not managed by PowerNukkitX ([encryptmypack](https://encryptmypack.com)), you can easily encrypt your resource package.

Some precautions:
- Resource package ends with `.mcpack`
- The root directory of the mcpack file cannot be nested with folders. The `manifest.json` file must be visible in the root directory of the resource package.
- **PowerNukkitX itself does not contain any encryption and decryption logic, but only sends 32 keys to the client according to your configuration (this is very important)**


## 2. Configure your key

The file with the same name as the resource package is named with a `.key` file extension name. The content is the 32-key corresponding to the resource package.

Example: There are two files in the `resource_packs` folder.  

| file name      | description  |
|-----------------|---------------|
| x1.mcpack         | A resource package named `x1`   |
| x1.mcpack.key           | This is the key of `x1.mcpack` resource package  |

## 3. Restart the server to make it effective

PowerNukkitX will only load the files in `resource_packs` when it starts, so you need to restart it to make it take effect.
