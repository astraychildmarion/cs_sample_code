<script lang="ts" setup>
  const props = defineProps<{
    dataSource: string[];
  }>();

  const isLastItem = (index: number) => props.dataSource.length - 1 === index;
</script>

<template>
  <div class="breadcrumb">
    <span v-for="(item, index) in props.dataSource" :key="index">
      <span class="breadcrumb-link" :class="{ 'breadcrumb-link_last': isLastItem(index) }">{{
        item
      }}</span>
      <span v-if="!isLastItem(index)" class="breadcrumb-separator">/</span>
    </span>
  </div>
</template>

<style lang="scss">
  .breadcrumb {
    padding: 32px;
  }
  .breadcrumb-separator {
    margin: 0 8px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 400;
  }
  .breadcrumb-link {
    color: rgba(0, 0, 0, 0.45);
    font-weight: 400;
  }
  .breadcrumb-link_last {
    color: #102e4d;
  }
</style>
