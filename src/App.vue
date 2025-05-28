<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import LeagueCard from '@/components/LeagueCard.vue';
import AppHeader from '@/components/AppHeader.vue';
import type { LeaguesResponse } from '@/types/api';
import { useBadgeStore } from '@/stores/league';
const badgeStore = useBadgeStore();

const { data, error, isFetching } = useFetch(
  'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php',
).json<LeaguesResponse>();
</script>

<template>
  <AppHeader></AppHeader>
  <img v-if="badgeStore.badgeToShow" :src="badgeStore.badgeToShow" alt="" />
  <main class="container mx-auto p-4">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="isFetching && !data">...fetching</div>
    <section v-else-if="data">
      <h2 class="text-2xl mb-4">Featured Leagues</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <LeagueCard
          v-for="league in data.leagues"
          :key="league.idLeague"
          :idLeague="league.idLeague"
          :strLeague="league.strLeague"
          :strSport="league.strSport"
          :strLeagueAlternate="league.strLeagueAlternate"
        />
      </div>
    </section>
  </main>
</template>
