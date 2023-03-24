<template>
  <div class="menu-box">
    <template v-if="isChildren">
      <el-sub-menu :index="menuItem.id">
        <template #title>
          <!-- <svg-icon v-if="menuItem.icon" :type="menuItem.icon" class="icon" /> -->
          <span>{{ menuItem.name }}</span>
        </template>
        <sider-menu-item v-for="item2 in item.children" :item="item2" :key="item2.id"> </sider-menu-item>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="menuItem.id">
        <!-- <svg-icon v-if="menuItem.icon" :type="menuItem.icon" class="icon" /> -->
        <span>{{ menuItem.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";
import type { PropType } from "vue";
import { isProperty, isRealArray } from "@/utils/comment";
import type { IRouterItem } from "../types";
// import SvgIcon from "@/components/svgIcon/index.vue";

export default defineComponent({
  name: "SiderMenuItem",
  // components: {
  //   SvgIcon
  // },
  props: {
    item: {
      type: Object as PropType<IRouterItem>,
      required: true
    },
    type: {
      default: "",
      type: String
    },
    show: {
      default: false,
      type: Boolean
    }
  },
  setup(props) {
    const { item } = toRefs(props);
    const checkPromise = (item: IRouterItem) => {
      return isProperty(item, "isShow") && !item.hidden;
    };

    const checkChildren = (it: IRouterItem): boolean => {
      return item.value && isProperty(it, "children") && isRealArray(it.children);
    };

    const isChildren = computed<boolean>(() => checkChildren(item.value));

    return {
      checkPromise,
      isChildren,
      menuItem: item
    };
  }
});
</script>
