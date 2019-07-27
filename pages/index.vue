<template lang='pug'>

v-content(style="margin-top:64px;padding-top:200px;")
    div(style="margin:auto;")
        v-container(id="header")
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
                    column
                    wrap
                    style="padding:100px 0 100px 0;"
            )
                v-layout(
                    row
                    justify-end
                )
                    v-menu(
                        offset-y
                    )
                        v-btn(
                            outline
                            href=""
                            slot="activator"
                        ) All areas
                        v-list
                            v-list-tile(
                                v-for="(item, index) in allAreas"
                                :key="index"
                                @click=""
                            )
                                v-list-tile-title {{ item.title }}
                    v-menu(offset-y)
                        v-btn(
                            outline
                            href=""
                            slot="activator"
                        ) All filter
                v-layout(
                    row
                    wrap
                    style="padding:20px 0 20px 0;"
                )
                    v-flex(
                        v-for="place in allPlaces"
                        :key="place.title"
                        xs3
                    )
                        v-card(raised)
                            v-card-media(
                                :src="place.src"
                                height="165px"
                            )
                            v-card-title
                                div
                                    h3.headline.mb-0 {{ place.title }}
                                    div(style="display:flex;align-items:center;")
                                        p {{ place.location }} . {{ place.type }}
                                    div.card-info
                                        div.material-icons(style="padding-right:10px;") wifi
                                        div {{ place.wifi_down }} / {{ place.wifi_up }} Mbps
                                    div.card-info
                                        div.material-icons(style="padding-right:10px;") lock
                                        div {{ place.password }}
                                    div.card-info
                                        div.material-icons(style="padding-right:10px;") access_time
                                        div(style="display:flex;")
                                            div(v-for="time in place.opening_times")
                                                template(v-if="time.day === currentDay")
                                                    template(v-if=" time.time === 'Closed' ")
                                                        div Closed
                                                    template(v-else)
                                                        div(style="display:flex;")
                                                            div(style="padding-right:10px;") Open
                                                            div {{ time.time }}

</template>

<script>

export default {
    data: () => ({
        allPlaces: '',
        allAreas: '',
    }),
    methods: {
        getPlaces: function () {
            this.$axios.$get('json/places.json')
                .then(response => (
                        this.allPlaces = response
                    )
                )
        },
        getAreas: function () {
            this.$axios.$get('json/areas.json')
                .then(response => (
                        this.allAreas = response
                    )
                )
        },
    },
    computed: {
        currentDay: function () {
            let d = new Date()
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            // console.log(days[d.getDay()])
            return days[d.getDay()]
        },
    },
    beforeMount () {
        this.getPlaces()
        this.getAreas()
        // this.$nextTick(function() {
        //     var el = this.header
        //     var style = window.getComputedStyle(el, null);
        //     this._maxWidth = style.maxWidth
        //     this._marginLeft = style.marginLeft

        //     window.addEventListener('resize', function(e) {
        //         var _el = this.header
        //         var _style = window.getComputedStyle(_el, null);
        //         var computedMarginLeft = parseInt(_style.marginLeft, 10) - 200 + 'px'
        //         var computedMaxWidth = parseInt(_style.maxWidth, 10) + 200 + 'px'
        //         this._maxWidth = computedMaxWidth
        //         this._marginLeft = computedMarginLeft
        //     })
        // })
    }
}
</script>

<style lang="stylus" scoped>
.large-text
    font-size 48px
    font-weight bold
    width 50%

.bold
    font-weight bold

.container.grid-list-md .layout .flex
    padding 15px

.filter-bar
    padding 10px

.card
    min-height 400px
    box-shadow 0 0 30px rgba(0,0,0,0.2)
    border-radius 5px
</style>
