<template lang="pug">

v-toolbar(fixed flat style="padding:0 70px 0 70px;")
	v-toolbar-title(style="font-weight:bold;") Nomadics
	v-spacer
	div(style="width:400px;padding-right:80px;")
		v-chip(
			color="primary"
			text-color="white"
			style="width:100%;"
		)
			v-text-field(
				prepend-icon="search"
				hide-details
				single-line
				label="Search"
			)
	v-toolbar-items
		<!-- v-btn(flat :ripple="false") Submit your space -->
	a.bmc-button(target="_blank" href="https://www.buymeacoffee.com/avJCVZs29")
		img(src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee")
		span(style="margin-left:5px") Buy me a coffee

</template>

<style lang="stylus">

.chip__content
	width 95%

.input-group__details
	all unset

	&::before
		all unset

	&::after
		all unset

</style>
