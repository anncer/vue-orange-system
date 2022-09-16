<template>
  <div class="menu-aside" :class="{ 'min-menu': false }">
    <div class="menu-wrapper">
      <div class="aside-logo">
        <router-link to="/main">
          <img :src="logo" alt="" />
        </router-link>
      </div>
      <!-- <div class="menu-opts" @click="handleCollapse">
        <i v-if="sideBarOpen" class="el-icon-arrow-left"></i>
        <i v-else class="el-icon-arrow-right"></i>
      </div> -->
      <el-menu
        class="menu-content"
        :collapse="collapsed"
        :collapse-transition="true"
        :unique-opened="true"
        mode="vertical"
      >
        <sider-menu-item
          v-for="item in userMenus"
          :key="item.id"
          :item="item"
        ></sider-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import siderMenuItem from "@/layout/components/siderMenuItem.vue";
import data from "./data";
import logo from "@/assets/images/logo-load.svg";
export default defineComponent({
  name: "SiderMenu",
  components: {
    siderMenuItem
  },
  setup() {
    const userMenus = data;
    const collapsed = ref(false)
    // console.log(userMenus, "userMenus");
    return {
      userMenus,
      collapsed,
      logo,
      defaultActive: ""
    };
  }
});
</script>
