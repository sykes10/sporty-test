<script setup lang="ts">
import LeagueCard from '@/components/LeagueCard.vue';
import AppHeader from '@/components/AppHeader.vue';
import { useLeaguesStore } from '@/stores/leagues';
import { storeToRefs } from 'pinia';
import FiltersBar from '@/components/FiltersBar.vue';
import Modal from '@/components/AppModal.vue';

const leaguesStore = useLeaguesStore();
const { isLoading, filteredLeagues, fetchError } = storeToRefs(leaguesStore);
const { fetchLeagues } = leaguesStore;
fetchLeagues();
</script>

<template>
  <AppHeader></AppHeader>
  <FiltersBar></FiltersBar>
  <main class="container mx-auto p-4">
    <div v-if="fetchError">{{ fetchError }}</div>
    <div v-else-if="isLoading">...fetching</div>
    <section v-else-if="filteredLeagues.length > 0">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <LeagueCard v-for="league in filteredLeagues" :key="league.id" :league="league" />
      </div>
    </section>
    <div v-else>
      <h2 class="text-2xl mb-4">No Leagues Found</h2>
      <p class="text-gray-500">Try changing the filters or check back later.</p>
    </div>
  </main>

  <!-- Global Modal -->
  <Modal />
</template>
