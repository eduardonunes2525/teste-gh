<template>
  <q-page padding class="flex">
    <q-card style="flex:1">
      <l-map :zoom="zoom" @update:center="centerUpdate" :center="user" :options="{zoomControl: false}">
        <l-marker :lat-lng="car"></l-marker>
        <l-marker :lat-lng="user"></l-marker>
        <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color" />
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import {
  LMap,
  LMarker,
  LPolyline,
  LTileLayer
} from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'KrMap',
  components: {
    LMap,
    LMarker,
    LPolyline,
    LTileLayer
  },
  data () {
    return {
      zoom: 13,
      showMap: true,
      user: L.latLng(47.334852, -1.509485),
      car: L.latLng(47.41320, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      polyline: {
        latlngs: [
          [47.334852, -1.509485],
          [47.342596, -1.328731],
          [47.241487, -1.190568],
          [47.234787, -1.358337]
        ],
        color: 'green'
      }
    }
  },
  methods: {
    centerUpdate (center) {
      this.currentCenter = center
    }
  }
}
</script>

<style>
</style>
