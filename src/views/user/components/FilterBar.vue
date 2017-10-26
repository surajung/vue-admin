<template>
  <div class="filter-bar control is-grouped">
    <p class="contro is-expanded has-addons">
      <input type="text" id="search" class="input"
        @keyup.enter="doFilter"
        placeholder="이름 또는 이메일을 입력하세요"
        v-model="filterText">
      <a @click="doFilter" class="button is-primary">검색</a>
      <a @click="resetFilter" class="button">리셋</a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'FilterBar',
  data () {
    return {
      filterText: ''
    }
  },
  methods: {
    doFilter () {
      this.$events.fire('filter-set',this.filterText)
    },
    resetFilter () {
      this.filterText = ''
      this.$events.fire('filter-reset')
    }
  }
}
</script>
<style scoped>
#search {width:300px;}
</style>

