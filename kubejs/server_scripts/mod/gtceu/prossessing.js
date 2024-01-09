ServerEvents.recipes( e => {
    const greg = e.recipes.gtceu; //Leave me Alone Cunt

    greg.alloy_smelter('gtceu:andesite_alloy')
    .itemInputs('2x minecraft:iron_ingot', '2x create:zinc_ingot')
    .itemOutputs('1x gtceu:andesite_alloy_ingot')
    .duration(300) //Useless?
    .EUt(8) //Power Useage

    greg.cutter('gtceu:rose_quartz')
    .itemInputs('create:rose_quartz')
    .inputFluids(Fluid.of('minecraftLwater', 4))
    .outputItems('2x create:polished_rose_quartz')
    .duration(100)
    .EUt(16)

    
})//End Of File