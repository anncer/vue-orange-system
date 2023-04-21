<template>
  <sider-menu v-if="isBar"></sider-menu>
  <transition name="fade">
    <div class="wrap-container" :class="{ 'max-context': !isBar }">
      <app-main />
    </div>
  </transition>
</template>

<script lang="ts" setup name="Layout">
import AppMain from "@/layout/components/appMain.vue";
import siderMenu from "./components/siderMenu.vue";
import settings from "../../settings";
import process from 'process'

const { isLeftbar } = settings;
const isBar = process.env.NODE_ENV === "development" ? true : isLeftbar;
</script>
