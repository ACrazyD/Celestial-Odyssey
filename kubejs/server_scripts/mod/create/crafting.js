ServerEvents.recipes(e => {

    //Direct Kentics 
    e.shaped('1x create:shaft', [
        'prp',
        ' h '
    ], {
        p: 'gtceu:andesite_alloy_double_plate',
        r: 'gtceu:andesite_alloy_long_rod',
        h: '#forge:tools/hammers'
    })

    e.shaped('create:cogwheel', [
        'sr ',
        'swh',
        'sb '
    ], {
        s: 'create:shaft',
        r: 'gtceu:andesite_alloy_rod',
        w: '#minecraft:planks',
        h: '#forge:tools/hammers',
        b: '#forge:tools/saws'
    })

    e.shaped('create:large_cogwheel', [
        'swr',
        'swh',
        'sb '
    ], {
        s: 'create:shaft',
        r: 'gtceu:andesite_alloy_rod',
        w: '#minecraft:planks',
        h: '#forge:tools/hammers',
        b: '#forge:tools/saws'
    })

    e.shaped('create:copper_valve_handle', [
        'crc',
        'rsr',
        'crc'
    ], {
        c: 'gtceu:copper_plate',
        r: 'gtceu:copper_rod',
        s: 'create:shaft'
    })



})//End Of File