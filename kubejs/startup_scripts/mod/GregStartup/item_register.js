GTCEuStartupEvents.registry('gtceu:material', e => {

    //Andesite Alloy
    e.create('andesite_alloy')
        .ingot()
        .components('1x andesite', '1x iron')
        .color(0x839689).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD)

    e.create('andesite_alloy_dust')
        .dust()
        .cableProperties(GTValues.V[GTValues.LV], 10, 0, true)

    e.create('rose_quartz') 
        .gem(1)
        .components('1x silicon', '2x oxygen')
        .color(0xFF69B4).iconSet(GTMaterialIconSet.GEM_VERTICAL)

})//End Of File