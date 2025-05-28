<template>
  <section class="flex gap-4 shadow-md bg-white">
    <div class="container mx-auto p-4">
      <!-- Filters with clear button -->
      <div class="flex items-center gap-4">
        <!-- Search and select in a grid -->
        <div class="grid grid-cols-[2fr_1fr] gap-4 flex-grow">
          <AppInput label="Search Leagues" placeholder="MLS..." v-model="searchQuery">
            <template #icon>
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search class="h-5 w-5 text-gray-400" />
              </div>
            </template>
          </AppInput>

          <AppSelect
            placeholder="All Sports"
            v-model="filterBySport"
            :options="sportOptions"
          />
        </div>

        <!-- Clear filters button -->
        <button
        v-if="hasActiveFilters"
          @click="handleClearFilters"
          class="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border bg-red-600 text-white border-gray-300 hover:bg-red-700 transition-colors"
        >
          <X class="h-5 w-5" />
          <span>Clear</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLeaguesStore } from '@/stores/leagues';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import AppInput from '@/components/AppInput.vue';
import AppSelect from '@/components/AppSelect.vue';
import { Search, X } from 'lucide-vue-next';

const leaguesStore = useLeaguesStore();
const { searchQuery, sports, filterBySport } = storeToRefs(leaguesStore);
const { clearFilters } = leaguesStore;

// Prepare options for the select
const sportOptions = computed(() => {
  return sports.value;
});

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return searchQuery.value !== '' || filterBySport.value !== '';
});

// Handle clear filters
function handleClearFilters() {
  if (hasActiveFilters.value) {
    clearFilters();
  }
}
</script>
