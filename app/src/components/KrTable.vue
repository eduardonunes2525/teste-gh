<template>
  <div>
    <q-table
        :grid="$q.screen.xs"
        title="Relatório"
        :data="table_data"
        :columns="columns"
        :rowsPerPage="10"
        row-key="name"
        color="orange"
        card-class="bg-black text-orange"
        table-class="text-orange"
        table-header-class="text-orange"
    >
        <template v-slot:header-cell="props">
        <q-th :props="props">
            <q-icon name="lock_open" size="1.5em" />
            {{ props.col.label }}
        </q-th>
        </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'KrTable',
  data () {
    return {
      columns: [
        { name: 'time', align: 'left', label: 'Dia / Hora', field: 'time', sortable: true },
        { name: 'speed', align: 'left', label: 'Velocidade', field: 'speed', sortable: true },
        { name: 'latitude', align: 'left', label: 'Latitude', field: 'latitude' },
        { name: 'longitude', align: 'left', label: 'Longitude', field: 'longitude' },
        { name: 'altitude', align: 'left', label: 'Altitude', field: 'altitude' },
        { name: 'course', align: 'left', label: 'Sentido', field: 'course' },
        { name: 'satellites', align: 'left', label: 'Precisão', field: 'satellites', sortable: true }
      ]
    }
  },
  props: {
    table_data: Array
  }
}
</script>

<style>
</style>
