<template>
  <q-page>
    <section class="Kr-map">
      <kr-map :locations_data="locations_data" />
    </section>
    <!--
    <mp-control />
    <q-btn round color="primary" icon="settings" @click="icon = true" />
    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">Settings</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-color v-model="locations_data.color" no-header no-footer class="my-picker" />
      </q-card>
    </q-dialog>
    <kr-table />
    <mp-real-time />
    -->
  </q-page>
</template>

<script>
import axios from 'axios'
import KrMap from '../components/KrRealTimeLocationMap.vue'
// import KrMap from '../components/KrMap.vue'
// import KrTable from '../components/KrTable.vue'
// import MapRealTime from '../components/MapRealTimeLocation.vue'
// import MapControlRange from '../components/MapControlRange.vue'

export default {
  name: 'PageIndex',
  components: {
    'kr-map': KrMap
    // 'kr-table': KrTable,
    // 'mp-real-time': MapRealTime,
    // 'mp-control': MapControlRange
  },
  data () {
    return {
      locations_data: {
        latlngs: [],
        color: 'orange'
      },
      speed: {
        average: 0,
        max: 0
      },
      icon: false,
      bar: false,
      bar2: false,
      toolbar: false
    }
  },
  mounted () {
    var self = this
    axios
      .get('http://localhost:3000/logs')
      .then((response) => {
        let resp = {}
        let MAKE_IN_API = JSON.parse(JSON.stringify(response.data))

        // TODO IN API self.polyline.latlngs = response['locations']
        resp['locations'] = MAKE_IN_API.map(location => [
          parseFloat(location['latitude']),
          parseFloat(location['longitude'])
        ])

        self.locations_data.latlngs = resp['locations']
      })
      .catch(function (/* error */) {})
      .then(function () {
        // self.loading = false
      })
  }
}
</script>

<style lang="sass" scoped>
.my-picker
  min-width: 40vh

.Kr-map
  height: 100vh
</style>
