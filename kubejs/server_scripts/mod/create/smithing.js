ServerEvents.recipes(e => {

    //Andesite Teir
    e.smithing(
        'create:mechanical_press',
        'kubejs:crude_mechanism',
        'gtceu:steel_block',
        'create:andesite_casing')

    e.smithing(
        'create:mechanical_mixer',
        'kubejs:crude_mechanism',
        'create:whisk',
        'create:andesite_casing')

    e.smithing(
        'create:mechanical_drill',
        'kubejs:crude_mechanism',
        'gtceu:iron_drill_head',
        'create:andesite_casing')

    e.smithing(
        'create:deployer',
        'kubejs:crude_mechanism',
        'create:brass_hand',
        'create:andesite_casing')

    e.smithing(
        'create:mechanical_saw',
        'kubejs:crude_mechanism',
        'gtceu:iron_buzz_saw_blade',
        'create:andesite_casing')

    //Copper Pipe Tweakssssssss 
    e.smithing(
        'create:fluid_pipe',
        'create_dd:sealed_mechanism',
        'gtceu:copper_tiny_fluid_pipe',
        'create:copper_casing')

    e.smithing(
        'create:mechanical_pump',
        'create_dd:sealed_mechanism',
        'create:fluid_pipe',
        'create:cogwheel')

    e.smithing(
        'create:smart_fluid_pipe',
        'create_dd:sealed_mechanism',
        'create:fluid_pipe',
        'create:attribute_filter')

    e.smithing(
        'create:fluid_valve',
        'create_dd:sealed_mechanism',
        'create:fluid_pipe',
        'create:shaft')

    //Copper Teir
    e.smithing(
        'create:spout',
        'create_dd:sealed_mechanism',
        'create:fluid_pipe',
        'create:copper_casing')

    e.smithing(
        'create:fluid_tank',
        'create_dd:sealed_mechanism',
        '#minecraft:glass',
        'create:copper_casing')

    //Brass Teir
    e.smithing(
        'create_dd:bronze_drill',
        'kubejs:crude_mechanism',
        'gtceu:bronze_drill_head',
        'create:brass_casing')

    e.smithing(
        'create_dd:bronze_saw',
        'kubejs:crude_mechanism',
        'gtceu:bronze_buzz_saw_blade',
        'create:brass_casing')

})//End Of File