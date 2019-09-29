<template>
  <div>
    <kr-map :locations="locations" :midpoint="midpoint" :polyline="polyline" />
    <kr-table :table_data="table_data" />
  </div>
</template>

<script>
import axios from 'axios'
import KrMap from '../components/KrMap.vue'
import KrTable from '../components/KrTable.vue'

export default {
  name: 'PageIndex',
  components: {
    'kr-map': KrMap,
    'kr-table': KrTable
  },
  data () {
    return {
      table_data: [],
      locations: [],
      midpoint: [0, 0],
      polyline: {
        latlngs: [],
        color: 'green'
      }
    }
  },
  mounted () {
    var self = this
    axios
      .get('http://localhost:3000/logs')
      .then((response) => {
        // TODO IN API self.polyline.latlngs = response['locations']
        let resp = {}
        let MAKE_IN_API = JSON.parse(JSON.stringify(response.data))

        resp['locations'] = MAKE_IN_API.map(location => [
          parseFloat(location['latitude']),
          parseFloat(location['longitude'])
        ])

        let first = resp['locations'][0]
        let last = resp['locations'][resp['locations'].length - 1]

        self.midpoint = [(first[0] + last[0]) / 2, (first[1] + last[1]) / 2]
        self.polyline.latlngs = resp['locations']
        self.table_data = MAKE_IN_API
      })
      .catch(function (/* error */) {})
      .then(function () {
        self.loading = false
      })
  }
}
</script>
