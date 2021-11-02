<script lang="ts" setup>
  import { computed } from 'vue';
  import {
    ServerBasicInterface,
    ServerComputingInterface,
    ServerNetworkInterface,
  } from '@/interfaces/SeverInterface';
  import LTMStatusLabel from '@/components/LTMStatusLabel.vue';

  type DataSource = ServerBasicInterface | ServerComputingInterface | ServerNetworkInterface;

  interface Props {
    title: string;
    columns: any[];
    dataSource: DataSource | undefined;
    horizontalDisplay?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    title: 'Title',
    columns: () => [],
    horizontalDisplay: false,
  });

  const isArray = (value: any) => Array.isArray(value);
  const isBoolean = (value: any) => typeof value === 'boolean';

  const grid = computed(() =>
    props.columns.map((column, index) => ({
      index,
      ...column,
      value: props.dataSource ? props.dataSource[column.key] : undefined,
    })),
  );
</script>

<template>
  <div class="description-card">
    <div class="description-card__title">
      {{ props.title }}
    </div>
    <div
      class="description-card__data-list data-list"
      :class="{ 'data-list_horizontal': horizontalDisplay }"
    >
      <div v-for="(row, index) in grid" :key="index" class="data-list__row">
        <div class="data-list__column">{{ row.title }}</div>
        <div class="data-list__data">
          <template v-if="isArray(row.value)">
            <div v-for="(subRow, jndex) in row.value" :key="`${index}-${jndex}`">{{ subRow }}</div>
          </template>
          <template v-else-if="isBoolean(row.value)">
            <LTMStatusLabel :enabled="true"></LTMStatusLabel>
          </template>
          <template v-else>{{ row.value }}</template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .description-card {
    padding: 16px;
    background-color: #fafafa;
    width: 100%;
    min-width: 500px;
    color: #102e4d;
  }
  .description-card__title {
    font-size: 1.1em;
    font-weight: bold;
  }
  .data-list__row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .data-list__column {
    margin-right: auto;
  }
  .data-list__row {
    padding: 12px 8px;
  }
  .data-list__data {
    font-weight: bold;
  }
  .data-list_horizontal {
    display: flex;
    flex-direction: row;
  }
  .data-list_horizontal > div:not(:last-child) {
    margin-right: 100px;
  }
  .data-list_horizontal > .data-list__row {
    flex-direction: column;
  }
  .data-list_horizontal > .data-list__row > .data-list__column {
    padding: 8px 0px;
  }
  :not(.data-list_horizontal) > .data-list__row > .data-list__data > div {
    text-align: end;
  }
</style>
