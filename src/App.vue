<template>
  <transition>
    <el-config-provider>
      <keep-alive>
        <router-view v-if="state.route" />
      </keep-alive>
      <router-view v-if="!state.route" />
    </el-config-provider>
  </transition>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header/index.vue'
import SideBar from '@/components/SideBar/index.vue'
const state = reactive({
  route: useRoute(),
})
watch(
  () => state.route,
  val => {
    console.log(val)
  },
  {
    immediate: true,
  }
)
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
