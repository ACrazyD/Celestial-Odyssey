// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Starting Up Madness')

StartupEvents.registry('item', e => {
	e.create('cosmic_reverie:incomplete_ender_core', 'create:sequenced_assembly')
})