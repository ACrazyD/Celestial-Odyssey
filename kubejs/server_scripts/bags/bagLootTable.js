function ItemOfBag(name, quantity, itemChance) {
    this.itemName = name;
    this.itemChance = itemChance || 5;
    this.quantity = quantity || 1;
    

    this.create_item = () => Item.of(`${this.quantity}x ${this.itemName}`).withChance(this.itemChance)
  
}

function Bag(loot_pool, item_quantity) {
    this.loot_pool = loot_pool.map(item => item.create_item());
    this.item_quantity = item_quantity || 2;  
}

//Loot Pools
//Testing (Temp)
let testing = {
    common: new Bag(
        [ 
            new ItemOfBag("kubejs:crude_mechanism")
        ]
    ),
    rare: new Bag(
        [ 
            new ItemOfBag("kubejs:rubust_mechanism")
        ]
    ),
    epic: new Bag(
        [ 
            new ItemOfBag("kubejs:temporal_component")
        ]
    ),
}

//Food (Temp)
let food = {
    common: new Bag(
        [ 
            new ItemOfBag("minecraft:mushroom_stew", 8),
            new ItemOfBag("minecraft:carrot", 4),
            new ItemOfBag("minecraft:potato", 4),
            new ItemOfBag("minecraft:cookie", 16),
            new ItemOfBag("minecraft:chicken", 16),
            new ItemOfBag("minecraft:rabbit", 16),
            new ItemOfBag("minecraft:apple", 12),
            new ItemOfBag("minecraft:pufferfish", 2),
            new ItemOfBag("minecraft:salmon", 8),
            new ItemOfBag("minecraft:cod", 16),
            new ItemOfBag("minecraft:tropical_fish", 4),
        ]
    ),
    rare: new Bag(
        [ 
            new ItemOfBag("minecraft:cooked_cod", 32),
            new ItemOfBag("minecraft:cooked_mutton", 64),
            new ItemOfBag("minecraft:rabbit_stew", 16),
            new ItemOfBag("minecraft:baked_potato", 64),
            new ItemOfBag("minecraft:cooked_porkchop", 32),
            new ItemOfBag("minecraft:cooked_salmon", 32),
            new ItemOfBag("minecraft:golden_apple"),
        ]
    ),
    epic: new Bag(
        [ 
            new ItemOfBag("minecraft:enchanted_golden_apple", 5),
            new ItemOfBag("minecraft:cake"),
        ]
    ),
}

function add_bags(event, bag_name, object) {
    for (let rarity of global.rarity) {
        event.addLootTableModifier(`loot:${bag_name}/${bag_name}_bag_${rarity}`).addWeightedLoot(   
            object[rarity].item_quantity,
            object[rarity].loot_pool,
        )
    }
}
LootJS.modifiers((event) => {
    add_bags(event, "food", food) 
});


