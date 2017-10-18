<template>
  <div id="app">
    <app-header></app-header>
    <sidebar></sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/layout/AppHeader'
import Sidebar from '@/layout/Sidebar'
import AppContent from '@/layout/AppContent'
import AppFooter from '@/layout/AppFooter'
export default {
  name: 'app',
  components: {
    AppHeader,
    Sidebar,
    AppContent,
    AppFooter
  }
}
</script>

<style lang="scss">
</style>
