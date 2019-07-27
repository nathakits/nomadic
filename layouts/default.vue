<template lang="pug">
  v-app
    my-header
    <nuxt/>
    //- my-footer
</template>

<script>
import MyFooter from '~/components/footer.vue'
import MyHeader from '~/components/header.vue'

console.log('%c Designed and made by Nathakit Sae-Tan ', 'background: #222; color: #fff; font-size: 15px;')

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>