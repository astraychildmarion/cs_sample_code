<script setup lang="ts">
  import { ref } from 'vue';
  import { XYLayout } from '@xycloud/xycloud-ui-kit-2';
  import { useRouter } from 'vue-router';
  import { siderData, siderMenuItems, appListDrawerData, manageMenu, userMenu } from '@/router';

  const router = useRouter();
  const selectedKeys = ref<string[]>([]);
  const clickMenu = (key: string) => {
    const target = siderMenuItems.find((item) => item.key === key);
    if (target) {
      selectedKeys.value = [key];
      router.push(target.path);
    }
  };
</script>

<template>
  <XYLayout
    manage-auth
    logo-url="/logo.svg"
    logo-link="https://alpha.xycloud.org/"
    :manage-menu="manageMenu"
    :user-menu="userMenu"
    :user-info="{
      name: 'System User 01',
    }"
    :sider-data="siderData"
    :app-list-drawer-data="appListDrawerData"
    :selected-keys="selectedKeys"
    @click-menu="clickMenu"
  >
    <template v-for="item in siderMenuItems" :key="item.vue.itemKey" #[item.vue.templateName]>
      <component :is="item.iconComponent" />
    </template>
    <template #content>
      <div style="padding-top: 72px">
        <router-view></router-view>
      </div>
    </template>
  </XYLayout>
</template>

<style lang="scss"></style>
