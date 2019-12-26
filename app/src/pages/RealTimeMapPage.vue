<template>
  <q-page>
    <section class='Kr-map'>
      <kr-map />
    </section>
  </q-page>
</template>

<script>
import KrMap from '../components/KrRealTimeLocationMap.vue'

export default {
  name: 'PageIndex',
  components: {
    'kr-map': KrMap
  }
}
</script>

<style lang='sass' scoped>
.my-picker
  min-width: 40vh

.Kr-map
  height: 100vh
</style>
