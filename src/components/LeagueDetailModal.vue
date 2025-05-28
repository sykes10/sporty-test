<template>
  <div class="league-detail-modal">
    <div v-if="loading" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>

    <div v-else class="flex flex-col items-center">
      <h2 class="text-2xl font-bold mb-4">{{ league.name }}</h2>

      <div v-if="badge" class="mb-6">
        <img :src="badge" :alt="league.name + ' badge'" class="h-32 object-contain" />
      </div>

      <div class="w-full space-y-4">
        <div v-if="league.alternativeName" class="text-center">
          <p class="text-gray-600 dark:text-gray-400">Also known as</p>
          <p class="font-medium">{{ league.alternativeName }}</p>
        </div>

        <div class="flex justify-center">
          <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
            {{ league.sport }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMemoizeBadges } from '@/composables/memoize-badges';
import type { League } from '@/stores/leagues';

const props = defineProps<{
  league: League;
}>();

const badge = ref<string>('');
const loading = ref(true);

onMounted(async () => {
  try {
    badge.value = await useMemoizeBadges(props.league.id);
  } catch (error) {
    console.error('Failed to fetch badge:', error);
  } finally {
    loading.value = false;
  }
});
</script>
