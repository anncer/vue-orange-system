<template>
  <sider-menu v-if="isBar"></sider-menu>
  <transition name="fade">
    <div class="wrap-container" :class="{'max-context': !isBar}">
      <app-main />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMain from "@/layout/components/appMain.vue";
import siderMenu from "./components/siderMenu.vue";
import settings from '../../config'
export default defineComponent({
  name: "Layout",
  components: {
    AppMain,
    siderMenu
  },
  setup() {
    const { isLeftbar } = settings
    const isBar = process.env.NODE_ENV === "development" ? true :  isLeftbar
    return { isBar };
  }
});
</script>
