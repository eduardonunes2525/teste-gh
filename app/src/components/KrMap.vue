<template>
  <l-map
    :zoom="zoom"
    @update:center="centerUpdate"
    :center="this.locations_data['latlngs'][0]"
    :options="{zoomControl: false}"
  >
    <l-marker :lat-lng="car"></l-marker>
    <l-marker :lat-lng="user"></l-marker>
    <l-polyline :lat-lngs="locations_data.latlngs" :color="locations_data.color" />
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
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
      zoom: 11,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', // TODO Deixar isso local
      // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      user: L.latLng(47.334852, -1.509485),
      car: L.latLng(47.41320, -1.219482)
    }
  },
  props: {
    locations_data: Object
  },
  computed: {
    // There is missing corner cases (like in the middle can have gratter values)
    // midpoint () {
    // const first = this.locations_data['latlngs'][0]
    // const last = this.locations_data['latlngs'][this.locations_data['latlngs'].length - 1]
    // const mid = [(first[0] + last[0]) / 2, (first[1] + last[1]) / 2]
    // return (mid || [])
    // }
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
