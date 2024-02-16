<template>
  <n-menu
    v-model:value="activeKey"
    mode="horizontal"
    :options="menuOptions"
    responsive
  />
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import {
  HomeOutline as HomeIcon,
  BagOutline as BagOutlineIcon,
} from "@vicons/ionicons5";

function renderIcon(icon, positionClass) {
  return () => h(NIcon, { class: positionClass }, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        "a",
        {
          href: "/",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "Inicio"
      ),
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "/shop-car",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        ""
      ),
    key: "shop-car",
    icon: renderIcon(BagOutlineIcon, "icon-right"),
  },
];

export default defineComponent({
  setup() {
    return {
      activeKey: ref(null),
      menuOptions,
    };
  },
});
</script>

<style>
.icon-right {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
