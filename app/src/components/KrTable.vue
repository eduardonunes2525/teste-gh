<template>
    <q-table
        :grid="$q.screen.xs"
        title="Relatório"
        :data="table_data"
        :columns="columns"
        :rowsPerPage="10"
        row-key="name"
        color="orange"
    >
        <template v-slot:header-cell="props">
        <q-th :props="props">
            <q-icon :name="props.col.icon" size="1.5em" />
            {{ props.col.label }}
        </q-th>
        </template>
    </q-table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'KrTable',
  data () {
    return {
      table_data: [],
      columns: [
        { name: 'time', align: 'left', label: 'Dia / Hora', field: 'time', sortable: true, icon: 'timer' },
        { name: 'speed', align: 'left', label: 'Velocidade', field: 'speed', sortable: true, icon: 'speedometer' },
        { name: 'latitude', align: 'left', label: 'Latitude', field: 'latitude' },
        { name: 'longitude', align: 'left', label: 'Longitude', field: 'longitude' },
        { name: 'altitude', align: 'left', label: 'Altitude', field: 'altitude' },
        { name: 'course', align: 'left', label: 'Sentido', field: 'course', icon: 'explore' },
        { name: 'satellites', align: 'left', label: 'Precisão', field: 'satellites', sortable: true }
      ]
    }
  },
  mounted () {
    var self = this
    axios
      .get('http://localhost:3000/logs')
      .then((response) => {
        // TODO IN API location/relatory/csv = response['locations']
        self.table_data = JSON.parse(JSON.stringify(response.data))
      })
      .catch((/* error */) => {})
      .then(() => {
        // self.loading = false
      })
  }
}
</script>

<style>
</style>
