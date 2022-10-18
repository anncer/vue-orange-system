<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'AppMain',
})

const cachedViews:any = {}
const key = ""
</script>
