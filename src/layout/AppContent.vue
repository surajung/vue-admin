<template>
  <section class="app-main">
    <levelbar></levelbar>
    <div class="container is-fluid is-marginleff app-content">
      <transition name="fade" mode="out-in" appear>
        <router-view>
          <!-- router -->
        </router-view>
      </transition>
    </div>
  </section>
</template>
<script>
import Levelbar from './Levelbar'
export default {
  name: 'AppContent',
  components: {
    Levelbar
  }
}
</script>
<style lang="scss">
.app-main {
  padding:52px 10px 10px;margin-left:180px;
}
.fade-enter {
  opacity:0;transition:opacity 0.5s;
}
.fade-enter {
  opacity:1;
}
</style>
