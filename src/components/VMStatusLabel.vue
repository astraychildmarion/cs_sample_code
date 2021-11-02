<script lang="ts" setup>
  import { computed } from '@vue/reactivity';

  interface Props {
    text: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    text: 'Running',
  });

  const bgColor = computed(() => (props.text === 'Running' ? '#37c5a0' : '#ef476f'));
</script>

<template>
  <div class="vm-status-label">
    <span :style="{ backgroundColor: bgColor }"></span>{{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
  .vm-status-label > span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  }
</style>
