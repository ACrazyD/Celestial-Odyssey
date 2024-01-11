WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.worldgenLayer = 'underground_ores';
      props.blocks = [
        "create:zinc_ore",
        "create:deepslate_zinc_ore",
        "occultism:silver_ore",
        "occultism:silver_ore_deepslate"
      ];
    });
  });