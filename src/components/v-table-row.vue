<template>
  <div class="v-table_row">
    <div class="row row-number" v-text="row_data.number"/>
    <div class="row row-name" v-text="row_data.name"/>
    <div class="row row-surname" v-text="row_data.surname"/>
    <div class="row row-curse" v-text="row_data.curse"/>
    <div class="row row-group" v-text="row_data.group"/>
    <div class="row row-midlle_mark" v-text="row_data.midlle_mark"/>
    <button class="row row-edits" @click.prevent="remove(row_data.id)">Удалить</button>
  </div>
</template>
<script>

export default {
  name: "v-table_row",
  props: {
    row_data: {
      type: Object,
    }
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('removeUser', id)
    }
  }

}
</script>

<style>
.v-table_row {
  display: grid;
  grid-template-columns: repeat(7, calc(900px / 7));
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
}

.v-table_row:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.row {
  padding: 4px 8px;
}
</style>
