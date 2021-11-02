<script lang="ts" setup>
  import { ref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import { XYActionButton } from '@xycloud/xycloud-ui-kit-2';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import VMStatusLabel from '@/components/VMStatusLabel.vue';
  import DescriptionCard from '@/components/DescriptionCard.vue';
  import { basicColumns, computingColumns, networkColumns } from '@/configs/serverDetail';
  import useServers from '@/composables/useServers';
  import useServerDetail from '@/composables/useServerDetail';
  import { actionOptions } from '@/configs/serverList';

  useServers();
  const { serverDetail } = useServerDetail();
  console.log({ serverDetail: serverDetail.value });
  const activeKey = ref('1');
  const handleMenuClick = () => {};
</script>

<template>
  <div class="server-detail">
    <Breadcrumb :data-source="['Server List', 'Detail']"></Breadcrumb>
    <div class="server-detail__header header">
      <div class="header__hostname">
        <h3>{{ serverDetail?.hostname }}</h3>
      </div>
      <VMStatusLabel class="header__vm-status" :text="serverDetail?.vmStatus"></VMStatusLabel>
      <XYActionButton
        class="header__action-btn"
        :action-option="actionOptions"
        :is-table-checkbox="false"
      ></XYActionButton>
    </div>
    <Tabs v-model:activeKey="activeKey" class="server-detail__tab">
      <TabPane key="1" tab="Overview">
        <div class="detail-body">
          <DescriptionCard
            class="detail-body__detail"
            title="Detail"
            :columns="basicColumns"
            :data-source="serverDetail?.basic"
          ></DescriptionCard>
          <DescriptionCard
            class="detail-body__computing"
            title="Computing"
            :columns="computingColumns"
            :data-source="serverDetail?.computing"
          ></DescriptionCard>
          <DescriptionCard
            class="detail-body__network"
            title="Network"
            :columns="networkColumns"
            :data-source="serverDetail?.network"
            horizontal-display
          ></DescriptionCard>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<style lang="scss" scoped>
  .server-detail__header {
    margin: 0px 32px;
    padding: 0px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .header__hostname {
    margin-right: auto;
    font-size: 24px;
    color: #102e4d;
  }
  .header__vm-status {
    padding: 8px;
    margin-right: 8px;
  }
  .server-detail__tab {
    padding: 0px 72px;
  }
  .detail-body {
    display: grid;
    grid-template-areas:
      'detail computing'
      'network network';
    gap: 16px;
  }
  .detail-body__detail {
    grid-area: detail;
  }
  .detail-body__computing {
    grid-area: computing;
  }
  .detail-body__network {
    grid-area: network;
  }
</style>
