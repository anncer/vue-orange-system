<template>
  <div class="menu-aside" :class="{ 'min-menu': false }">
    <div class="menu-wrapper">
      <div v-if="isLogo" class="aside-logo">
        <router-link to="/main">
          <img :src="logo" alt="" />
        </router-link>
      </div>
      <div class="menu-opts" @click="handleCollapse">
        <i v-if="collapsed" class="el-icon-arrow-left"></i>
        <i v-else class="el-icon-arrow-right"></i>
      </div>
      <el-menu
        class="menu-content"
        :collapse="collapsed"
        :collapse-transition="true"
        :unique-opened="true"
        mode="vertical"
      >
        <sider-menu-item v-for="item in userMenus" :key="item.id" :item="item"></sider-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script lang="ts" setup name="SiderMenu">
import { ref } from "vue";
import siderMenuItem from "@/layout/components/siderMenuItem.vue";
import data from "./data";
import logo from "@/assets/images/logo-load.svg";
import settings from "../../settings";

const userMenus: any = data;
const collapsed = ref(false);

const { isLogo } = settings;

const handleCollapse = () => {
  collapsed.value = !collapsed.value
}
</script>
