<template>
  <l-map
    :zoom="map.zoom"
    :bounds="bounds"
    @update:center="centerUpdate"
    :center="midpoint"
    :options="map.options"
  >
    <l-marker :icon="user.icon" :lat-lng="user.position" />
    <l-layer-group>
      <l-marker
        v-for="(car, index) in cars"
        :key="car.icon + '_' + index"
        :icon="car.icon"
        :lat-lng="car.position"
      />
    </l-layer-group>
    <l-tile-layer :url="map.url"></l-tile-layer>
  </l-map>
</template>

<script>
import { LMap, LMarker, LTileLayer, LLayerGroup } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { latLngBounds } from 'leaflet'

export default {
  name: 'KrMap',
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LLayerGroup
  },
  data () {
    return {
      map: {
        zoom: 11,
        options: {
          zoomControl: false
        },
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' // TODO Deixar isso local
      },
      // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      user: {
        position: [-16.116016, -47.951183],
        icon: L.icon({
          iconUrl: require('../assets/user-loc.png'),
          iconSize: [60, 60]
        })
      },
      cars: [
        {
          position: [-15.864826, -48.080887],
          icon: L.icon({
            iconUrl: require('../assets/car-loc.jpg'),
            iconSize: [60, 60]
          })
        }
      ],
      bounds: latLngBounds({ lat: 0, lng: 0 }, { lat: 0, lng: 0 }),
      messages: [0, 0],
      location: [],
      // Melhorar essa comunicação de websocket
      socket: new WebSocket('ws://167.71.94.162:8000/real_time_location')
    }
  },
  computed: {
    // TODO Update zoom to (if big values are used the cars dont show)
    midpoint () {
      const first = this.user.position
      const last = this.cars[0].position
      const mid = [(first[0] + last[0]) / 2, (first[1] + last[1]) / 2]
      return mid || []
    }
  },
  methods: {
    centerUpdate (center) {
      this.currentCenter = center
    }
  },
  mounted () {
    // Set time to update data and get user and car position
    /*
    let self = this
    setInterval(() => {
      let x = [self.cars[0].position[0] + 0.01, self.cars[0].position[1] + 0.01]
      if (x[0] !== undefined && x[1] !== undefined) {
        self.cars[0].position = x
        self.bounds = latLngBounds(self.cars.map(o => o.position))
      }
    }, 3000)
     */

    navigator.geolocation.watchPosition(position => {
      this.user.position = [position.coords.latitude, position.coords.longitude]
    })

    this.socket.onmessage = event => {
      this.cars[0].position = JSON.parse(event.data)
      let markersBounds = this.cars.map(o => o.position)
      markersBounds.push(this.user.position)

      this.bounds = latLngBounds(markersBounds)
      // console.log('AQUI', event.data)
    }
  }
}
</script>

<style>
</style>
