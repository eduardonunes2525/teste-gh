<template>
  <div class="q-pa-md">
     <div class="row">
      <div class="col Initial-date-picker">
        <q-input filled v-model="initial_date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="initial_date" mask="DD/MM/YYYY" :locale="myLocale" v-on:click="checkLastDate"/>
              </q-popup-proxy>
            </q-icon>
          </template>
          <!-- <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="initial_date" mask="DD/MM/YYYY HH:mm:ss" format24h dark/>
              </q-popup-proxy>
            </q-icon>
          </template> -->
        </q-input>
      </div>
      <div class="col">
        <q-input filled v-model="last_date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="last_date" mask="DD/MM/YYYY" :options="optionsFn" :locale="myLocale"/>
              </q-popup-proxy>
            </q-icon>
          </template>
          <!-- <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="last_date" mask="DD/MM/YYYY HH:mm" format24h dark />
              </q-popup-proxy>
            </q-icon>
          </template> -->
        </q-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapControlRange',
  data () {
    return {
      initial_date: new Date().toLocaleDateString('pt-BR'),
      last_date: new Date().toLocaleDateString('pt-BR'),
      myLocale: {
        days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
        daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junio_Júlio_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Júl_Ago_Set_Out_Nov_Dez'.split('_'),
        firstDayOfWeek: 1
      }
    }
  },
  methods: {
    optionsFn (date) {
      const init = this.initial_date
      const americanFormat = init.substr(6, 4) + '/' + init.substr(3, 2) + '/' + init.substr(0, 2)

      const current = new Date(date)
      const initial = new Date(americanFormat)

      return initial <= current
    },
    checkLastDate () {
      let init = this.initial_date
      let last = this.last_date

      const americanFormatInit = init.substr(6, 4) + '/' + init.substr(3, 2) + '/' + init.substr(0, 2)
      const americanFormatLast = last.substr(6, 4) + '/' + last.substr(3, 2) + '/' + last.substr(0, 2)

      const initialDate = new Date(americanFormatInit)
      const lastDate = new Date(americanFormatLast)

      if (initialDate > lastDate) this.last_date = ''
    }
  }
}
</script>

<style lang="sass" scoped>
.Initial-date-picker
  margin-right: 10px
</style>
