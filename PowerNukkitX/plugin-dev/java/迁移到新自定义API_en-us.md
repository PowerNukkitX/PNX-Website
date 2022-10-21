# Custom Feature Api migration

All custom feature need to implement the `public CustomItemDefinition getDefinition()` method,which corresponds to `CustomItemDefinition`,
`CustomBlockDefinition`, 
`CustomEntityDefinition` respectively.These three are all simple builder tool classes.

## Api Removed

- `Entity#registerCustomEntity(CustomEntityDefinition customEntityDefinition, Class<? extends Entity> entity)`
  Replace with
  `Entity#registerCustomEntity(CustomEntityProvider customEntityProvider)`

- `CustomBlock#getTexture()`
  Replace with
  `CustomBlockDefinition.builder(this, Texture Name)` in `CustomBlock#getDefinition()`

- `CustomBlock#getMaterials()`
  Replace with
  `CustomBlockDefinition.builder(this, Materials materials,BlockCreativeCategory blockCreativeCategory)` in
  `CustomBlock#getDefinition()`

- `CustomBlock#getGeometry()`
  Replace with
  `CustomBlockDefinition.Builder#geometry(String geometry)` in `CustomBlock#getDefinition()`

- `CustomBlock#componentNBTProcessor(CompoundTag componentNBT)`
  Replace with
  `CustomBlockDefinition.Builder#customBuild(Consumer<CompoundTag> nbt)` in `CustomBlock#getDefinition()`

- `CustomBlock#getPermutations()`
  Replace with
  `CustomBlockDefinition.Builder#permutations(Permutations permutations)` in `CustomBlock#getDefinition()`

- `ItemCustom#textureSize`
  Replace with
  `CustomItemDefinition.Builder#renderOffsets(RenderOffsets renderOffsets)` in `ItemCustom#getDefinition()`
## Api Changed

- `CustomBlock#getNamespace() -> CustomBlock#getNamespaceId()`
## Example of a simple pickaxe
```java
public class MyPickaxe extends ItemCustomTool {
    public MyPickaxe() {
        super("blocklynukkit:my_pickaxe", "测试镐", "amethyst_pickaxe");

    }

    @Override
    public CustomItemDefinition getDefinition() {
        return CustomItemDefinition
                .toolBuilder(this, ItemCreativeCategory.EQUIPMENT)
                .speed(10)//Set the digging speed of the pickaxe
                .addExtraBlockTag(BlockState.of("minecraft:nether_brick").getBlock(), 10)//Add additional matching block, if the block do not match then it is normal digging speed
                .allowOffHand(true)//Can be held in the offHand
                .handEquipped(true)//If true is the way the tool is displayed, false is the item
                .foil(true)//Items with enchanted light
                .build();
    }

    @Override
    public int getMaxDurability() {
        return ItemTool.DURABILITY_STONE;
    }

    @Override
    public boolean isPickaxe() {
        return true;
    }

    @Override
    public int getAttackDamage() {
        return 3;
    }

    @Override
    public int getEnchantAbility() {
        return 50;
    }

    @Override
    public int getTier() {
        return ItemCustomTool.TIER_NETHERITE;
    }
}
```

#### Example of a custom slab
```java
public class MySlab extends BlockTransparentMeta implements CustomBlock {
    public final BooleanBlockProperty BRIDGE_TOP_SLOT_BIT = new BooleanBlockProperty("bridge:top_slot_bit", false);
    public final BooleanBlockProperty BRIDGE_IS_FULL_BIT = new BooleanBlockProperty("bridge:is_full_bit", false);

    @Override
    public String getNamespaceId() {
        return "blocklynukkit:blue_mahoe_slab";
    }

    @Override
    public String getName() {
        return CustomBlock.super.getName();
    }

    @Override
    public int getId() {
        return CustomBlock.super.getId();
    }

    @NotNull
    @Override
    public BlockProperties getProperties() {
        return new BlockProperties(
                BRIDGE_TOP_SLOT_BIT, BRIDGE_IS_FULL_BIT
        );
    }

    @Override
    public CustomBlockDefinition getDefinition() {
        return CustomBlockDefinition
                .builder(this, "blue_mahoe_planks")//texture name
                .geometry("geometry.custom_slab")//geometry name
                .permutations(new Permutations(//permutation data
                        Permutation.builder()
                                .collision_box_enabled(true)
                                .collision_box_origin(new Vector3f(-8, 0, -8))
                                .collision_box_size(new Vector3f(16, 8, 16))
                                .selection_box_enabled(true)
                                .selection_box_origin(new Vector3f(-8, 0, -8))
                                .selection_box_size(new Vector3f(16, 8, 16))
                                .condition("query.block_property('bridge:top_slot_bit') == false && query.block_property('bridge:is_full_bit') == false"),
                        Permutation.builder()
                                .collision_box_enabled(true)
                                .collision_box_origin(new Vector3f(-8, 8, -8))
                                .collision_box_size(new Vector3f(16, 16, 16))
                                .selection_box_enabled(true)
                                .selection_box_origin(new Vector3f(-8, 8, -8))
                                .selection_box_size(new Vector3f(16, 16, 16))
                                .condition("query.block_property('bridge:top_slot_bit') == true && query.block_property('bridge:is_full_bit') == false"),
                        Permutation.builder()
                                .collision_box_enabled(true)
                                .collision_box_origin(new Vector3f(-8, 0, -8))
                                .collision_box_size(new Vector3f(16, 16, 16))
                                .selection_box_enabled(true)
                                .selection_box_origin(new Vector3f(-8, 0, -8))
                                .selection_box_size(new Vector3f(16, 16, 16))
                                .condition("query.block_property('bridge:is_full_bit') == true")
                ))
                .customBuild((nbt) -> {//custom processing result compound
                    nbt.getCompound("components").putCompound("minecraft:part_visibility", new CompoundTag()
                            .putCompound("boneConditions", new CompoundTag()
                                    .putCompound("lower", new CompoundTag()
                                            .putString("bone_condition", "!query.block_property('bridge:top_slot_bit') || query.block_property('bridge:is_full_bit')")
                                            .putString("bone_name", "lower")
                                            .putInt("molang_version", 6))
                                    .putCompound("upper", new CompoundTag()
                                            .putString("bone_condition", "query.block_property('bridge:top_slot_bit') || query.block_property('bridge:is_full_bit')")
                                            .putString("bone_name", "upper")
                                            .putInt("molang_version", 6))));
                });
    }
    //Block digging takes time
    @Override
    public double calculateBreakTime(@NotNull Item item, @Nullable Player player) {
        return 3;
    }
    //Block friction factor
    @Override
    public double getFrictionFactor() {
        return 0.1;
    }
    //Block explosion resistance
    @Override
    public double getResistance() {
        return 5;
    }
    //Block emit light level
    @Override
    public int getLightLevel() {
        return 15;
    }
    //Block absorb light level
    @Override
    public int getLightFilter() {
        return 15;
    }
    //burn ability
    @Override
    public int getBurnAbility() {
        return 0;
    }
    //burn chance
    @Override
    public int getBurnChance() {
        return 0;
    }
    //Block item max stack size
    @Override
    public int getItemMaxStackSize() {
        return 64;
    }

    @Override
    public boolean place(@NotNull Item item, @NotNull Block block, @NotNull Block target, @NotNull BlockFace face, double fx, double fy, double fz, @Nullable Player player) {
        //....Server-side processing behavior
    }
}
```

## For change details, please see
- https://github.com/PowerNukkitX/ExamplePlugin-Experiment-Mode/pull/1/files
- https://javadoc.io/doc/cn.powernukkitx/powernukkitx (wait merge)

