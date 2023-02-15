<template>
  <div id="app">
    <v-table
      :users_data="USERS"
    />
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import vTable from './components/table/v-table.vue'

export default {
  name: 'App',
  components: {
    vTable
  },
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
