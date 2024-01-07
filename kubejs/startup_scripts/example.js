// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Starting Up Madness')

StartupEvents.registry('item', e => {
})

StartupEvents.postInit((event) => {
    Platform.setModName("cosmic_reverie", "Cosmic Reverie")
  })