<template>
  <div>
    <q-page padding class="flex">
      <mp-control />
      <q-card style="flex:1">
        <kr-map :locations_data="locations_data" />
      </q-card>
    </q-page>
    <kr-table v-if="false" />
  </div>
</template>

<script>
import axios from 'axios'
import KrMap from '../components/KrMap.vue'
import KrTable from '../components/KrTable.vue'
import MapControlRange from '../components/MapControlRange.vue'

export default {
  name: 'PageIndex',
  components: {
    'kr-map': KrMap,
    'kr-table': KrTable,
    'mp-control': MapControlRange
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
      }
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
