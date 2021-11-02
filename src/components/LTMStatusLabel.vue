<script lang="ts" setup>
  import { computed } from '@vue/reactivity';

  interface Props {
    enabled: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    enabled: true,
  });

  const text = computed(() => (props.enabled ? 'Enabled' : 'Disabled'));
  const bgColor = computed(() => (props.enabled ? '#37c5a0' : '#ef476f'));
</script>

<template>
  <div class="ltm-status-label"><span :style="{ backgroundColor: bgColor }"></span>{{ text }}</div>
</template>

<style lang="scss" scoped>
  .ltm-status-label > span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  }
</style>
