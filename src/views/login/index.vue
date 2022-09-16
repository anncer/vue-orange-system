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
          <h2>人员数据中台</h2>
        </div>
        <login-panel ref="panelRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginPanel from "./components/login-panel.vue";
import { setBg } from "./hooks/useLoginHook";

import bg from "./img/bg.png";
import avatarSvg from "@/assets/images/logo-unload.svg";

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    // 获取子组件实例
    // const panelRef = ref<InstanceType<typeof LoginPanel>>();
    // console.log(panelRef.value?.handleLogin());
    // const setRedirect = () => {
    //   //   const redirect = $route.query.redirect;
    //   //   loading = false;
    //   //   redirect
    //   //     ? $router.push(redirect)
    //   //     : $router.push({ name: "home" });
    // };

    // const goNext = () => {
    //   setRedirect();
    //   // loading = ref(false);
    // };
    return {
      bg,
      avatarSvg,
      currentWeek: ref(setBg())
    };
  }
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
