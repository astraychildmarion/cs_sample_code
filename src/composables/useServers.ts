import { computed, onMounted } from 'vue';
import { useStore } from '@/store';

export default function useServers() {
  const store = useStore();
  const servers = computed(() => store.state.server.list);

  onMounted(() => store.dispatch('server/GET_LIST'));

  return {
    servers,
  };
}
