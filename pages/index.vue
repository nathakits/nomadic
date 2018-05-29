<template lang='pug'>

v-content(style="margin-top:64px;padding-top:200px;")
    v-container
        v-layout(row wrap)
            v-flex(xs6)
                div.display-2.bold Discover places to work
            v-flex(
                d-flex
                xs6
                align-end
                align-content-end
                justify-end
            )
                div.subheading.text-xs-right.bold A collection of places for you to discover and explore

    v-container(grid-list-md)
        v-layout(
            row
            wrap
            justify-space-between
            style="padding:200px 0 200px 0;"
        )
            v-flex(
                v-for="place in places"
                :key="place.title"
                xs3
                style="max-width:23%;"
            )
                v-card(raised)
                    v-card-media(
                        :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                        height="165px"
                    )
                    v-card-title
                        div
                            h3.headline.mb-0 {{ place.title }}
                            div {{ place.location }} . {{ place.type }}

</template>

<script>
console.log('%c Designed and made by Nathakit Sae-Tan ', 'background: #222; color: #fff; font-size: 15px;')

export default {
    data: () => ({
        places: [
            {
                title: 'Luka',
                src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
                location: 'Sathorn',
                type: 'Cafe'
            },
            {
                title: 'Phil Coffee',
                src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg',
                location: 'Phrakanong',
                type: 'Cafe'
            },
            {
                title: 'Happy Ending',
                src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
                location: 'Rama 1',
                type: 'Restaurant'
            },
            {
                title: 'Ceresia',
                src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg',
                location: 'Phrompong',
                type: 'Cafe'
            }
        ]
    })
}
</script>

<style lang="stylus" scoped>
.large-text
    font-size 48px
    font-weight bold
    width 50%

.bold
    font-weight bold
</style>
