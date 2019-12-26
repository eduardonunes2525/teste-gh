<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Base',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
