<template>
  <div class='v-table'>
    <div class="v-table_header">
      <p>Номер</p>
      <p>Имя</p>
      <p>Фамилия</p>
      <p>Курс</p>
      <p>Группа</p>
      <p @click="sortPoint">Средний балл</p>
      <p></p>
    </div>
    <div class="table_body">
      <div class="body_row">
        <vTableRow
          v-for="row in paginatedUsers"
          :key="row.id"
          :row_data="row"
        />
      </div>
    </div>
    <div class="v-table_pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        v-text="page"
        :class="{'active-page': page === currentId}"
      />
    </div>
  </div>
</template>
<script>

import vTableRow from '../v-table-row.vue'

export default {
  name: "v-table",
  components: {
    vTableRow
  },
  props: {
    users_data: {
      type: Object,
    }
  },
  data() {
    return {
      usersPerPage: 5,
      pageNumber: 1,
      currentId: 1,
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / 5);
    },
    paginatedUsers() {
      const from = (this.pageNumber - 1) * this.usersPerPage;
      const to = from + this.usersPerPage;
      return this.users_data.slice(from, to)
    }
  },
  methods: {
    pageClick(page) {
      this.currentId = page
      this.pageNumber = page;
    },
    sortPoint() {
      this.$store.dispatch('sortPoint')
    },
  },
}
</script>
<style>
.v-table {
  max-width: 900px;
  margin: 0 auto;
}

.v-table_header {
  display: grid;
  grid-template-columns: repeat(7, calc(900px / 7));
}

.v-table_header p {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-bottom: 1px solid transparent;
}


.v-table_header p:hover {
  cursor: pointer;
  border-bottom: 1px solid #000000;
}

.v-table_pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.page {
  cursor: pointer;
  padding: 0 2px;
  margin: 0 8px;
  border-bottom: 1px solid transparent;
}

.page:hover {
  border-bottom: 1px solid #000;
}

.active-page {
  border-bottom: 1px solid #000;
}

</style>
