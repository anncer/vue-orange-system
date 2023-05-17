<template>
  <div>main</div>
  <SvgIcon name="arrow-down"></SvgIcon>
  <ce-button @click="handleChangeTheme">切换主题</ce-button>
</template>

<script setup lang="ts" name="Main">
import SvgIcon from "@/components/svgIcon/index.vue";

const handleChangeTheme = () => {
  const className = document.documentElement.className
  document.documentElement.className = className === 'dark' ? '' : "dark"
}
</script>
