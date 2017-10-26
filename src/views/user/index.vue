<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <div class="title">
          유저 목록
        </div>
        <filter-bar></filter-bar>
        <vuetable
          api-url="https://vuetable.ratiw.net/api/users"
          :fields="fields"
          :append-params="appendParams"
          ref="vuetable"
          pagination-path=""
          @vuetable:pagination-data="onPaginationData"></vuetable>
          <user-pagination @vuetable-pagination:change-page="onChangePage"
          ref="pagination"></user-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import UserPagination from './components/UserPagination'
import FilterBar from './components/FilterBar'

export default {
  name: 'UserIndex',
  data () {
    return {
      fields: [
        {
          name: 'name',
          title: '이름',
          sortField: 'name'
        },
        {
          name: 'email',
          title: '이메일',
          sortField: 'email'
        },
        {
          name: 'birthdate',
          title: '생년월일',
          sortField: 'birthdate'
        },
        {
          name: 'salary',
          title: '연봉',
          sortField: 'salary'
        }
      ],
      appendParams: {}
    }
  },
  methods: {
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onFilterSet (filterText) {
      this.appendParams = {
        filter: filterText
      }
      console.log(this.appendParams)
      this.$nextTick(() => {
        this.$refs.vuetable.refresh()
      })
    },
    onFilterReset () {
      this.appendParams = {}
      this.$nextTick(() => {
        this.$refs.vuetable.refresh()
      })
    }
  },
  mounted () {
    this.$events.listen('filter-set', filterText => this.onFilterSet(filterText))
    this.$events.listen('filter-reset', this.onFilterReset)
  },
  beforeDestroy () {
    this.$events.remove('filter-set')
    this.$events.remove('filter-reset')
  },
  components: {
    Vuetable,
    UserPagination,
    FilterBar
  }
}
</script>
