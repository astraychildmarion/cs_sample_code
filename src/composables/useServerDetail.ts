import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';

export default function useServerDetail() {
  const route = useRoute();
  const store = useStore();
  const serverId = route.params.id.toString();
  const serverDetail = computed(() => store.getters['server/find'](serverId));

  return {
    serverDetail,
  };
}
