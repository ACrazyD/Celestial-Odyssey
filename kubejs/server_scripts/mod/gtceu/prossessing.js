ServerEvents.recipes( e => {
    const greg = e.recipes.gtceu; //Leave me Alone Cunt

    greg.alloy_smelter('gtceu:andesite_alloy')
    .itemInputs('2x minecraft:iron_ingot', '2x create:zinc_ingot')
    .itemOutputs('1x gtceu:andesite_alloy_ingot')
    .duration(300)
    .EUt(8)

    greg.assembler('kubejs:crude_mechanism')
    .itemInputs('1x create:shaft', '1x create:cogwheel' , '2x gtceu:andesite_alloy_ingot')
    .itemOutputs('kubejs:crude_mechanism')
    .circuit(1)
    .duration(100)
    .EUt(16)
    
})//End Of File