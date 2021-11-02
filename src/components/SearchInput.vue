<script lang="ts" setup>
  import { ref } from 'vue';
  import { InputSearch } from 'ant-design-vue';

  const value = ref<string>('');

  const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
  };
</script>

<template>
  <InputSearch
    v-model:value="value"
    placeholder="Search on server list"
    style="width: 214px"
    @search="onSearch"
  />
</template>
