ServerEvents.recipes(e => {

    //Crafting Table Rebuild for VCT - Functions Are King >:)
    function craftingbench(table, log){
        e.remove({ output: table })
        e.shaped(table, [
            'ff',
            'll'
        ], {
            f: 'minecraft:flint',
            l: log
        })
    }
    //Alllll The Benches 
    craftingbench('vct:spruce_crafting_table', 'minecraft:spruce_log')
    craftingbench('vct:birch_crafting_table', 'minecraft:birch_log')
    craftingbench('vct:jungle_crafting_table', 'minecraft:jungle_log')
    craftingbench('vct:acacia_crafting_table', 'minecraft:acacia_log')
    craftingbench('vct:dark_oak_crafting_table', 'minecraft:dark_oak_log')
    craftingbench('vct:mangrove_crafting_table', 'minecraft:mangrove_log')
    craftingbench('vct:crimson_crafting_table', 'minecraft:crimson_stem')
    craftingbench('vct:warped_crafting_table', 'minecraft:warped_stem')
    craftingbench('minecraft:crafting_table', 'minecraft:oak_log')
    craftingbench('vct:ge_cypress_crafting_table', 'goodendings:cypress_log')
    craftingbench('vct:ge_muddy_oak_crafting_table', 'goodendings:muddy_oak_log')
    craftingbench('vct:aeronos_crafting_table', 'ad_astra:aeronos_stem')
    craftingbench('vct:glacian_crafting_table', 'ad_astra:stripped_glacian_log')
    craftingbench('vct:strophar_crafting_table', 'ad_astra:strophar_stem')
    craftingbench('vct:bm_ancient_oak_crafting_table', 'biomemakover:ancient_oak_log')
    craftingbench('vct:bm_blighted_balsa_crafting_table', 'biomemakover:blighted_balsa_log')
    craftingbench('vct:bm_swamp_cypress_crafting_table', 'biomemakover:swamp_cypress_log')
    craftingbench('vct:bm_willow_crafting_table', 'biomemakover:willow_log')
    craftingbench('vct:bamboo_crafting_table', 'minecraft:bamboo_block')



})