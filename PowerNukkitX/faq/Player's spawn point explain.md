## Explanation related to player respawn points

### About player respawn point priority
World respawn points < Player respawn points = Block respawn points (e.g. bed Respawn anchor)

### About respawn point data storage
World respawn point data is stored in each world, player respawn points and block respawn points are stored in each player itself

### Describe the logic of player respawn selection of respawn points
- When a player respawn, it looks for the existence of a player respawn point or a block respawn point. Since these two respawn points have the same priority, only one can exist, otherwise the world respawn point will be selected (to prevent conflicts)
- When a player does not have both player respawn points and respawn cube respawn points, the world respawn point will be chosen to respawn
- When a player has both a player respawn point and a respawn type cube respawn point, they will also choose the world respawn point to respawn

### Briefly explain the logic of all respawn point changes
- When a player enters the server for the first time, the world respawn point for the corresponding world will be set
- When the /setworldspawn command is used, the world respawn point will be set
- When a player uses a respawn cube, the respawn cube respawn point will be set and the player respawn point will be removed
- When the /spawnpoint command is used, the player respawn point will be set and the respawn point will be removed.
- When using the /clearspawnpoint command, both the player revive point and the respawn point will be removed.
- When a respawn cube is lost (e.g. bed is removed, respawn anchor loses power) both the player respawn point and the respawn cube respawn point will be removed and the player will be respawned to the world respawn point

### Tips
In previous versions of PNX, the player respawn point was set to be the same as the world respawn point when the player first joined the server, so if you want to use the world respawn point, you may need to use the /clearspawnpoint command to clear all players' player respawn points for it to take effect

### Why this design?
You may wonder? It feels very dull to design it this way, and it is.
But for legacy reasons, it's the best we can do to ensure plugin compatibility.