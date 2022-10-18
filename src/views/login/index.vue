<template>
  <div class="login">
    <img :src="bg" class="wave" />
    <div class="login-container">
      <div class="login-pic">
        <img :src="currentWeek" />
      </div>
      <div class="login-box">
        <div class="login-title">
          <img class="login-avatar" :src="avatarSvg" />
          <h2>xx平台</h2>
        </div>
        <login-panel ref="panelRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginPanel from "./components/login-panel.vue";
import { setBg } from "./hooks/useLoginHook";

import bg from "./img/bg.png";
import avatarSvg from "@/assets/images/logo-unload.svg";

const currentWeek = ref(setBg())
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
