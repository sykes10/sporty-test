import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';
import type { LeaguesResponse } from '@/types/api';
import { filterLeagues } from '@/utils/filters';

export interface League {
  id: string;
  name: string;
  sport: string;
  alternativeName: string;
}

export const useLeaguesStore = defineStore('leagues', () => {
  const leagues = ref<League[]>([]);
  const sports = ref<string[]>([]);
  // Filter state
  const filterBySport = ref<string>('');
  const searchQuery = ref<string>('');

  // fetch handling

  const {
    data,
    error: fetchError,
    isFetching: isLoading,
    execute,
  } = useFetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php', {
    immediate: false,
  }).json<LeaguesResponse>();

  // Computed property for filtered leagues using the filter utility
  const filteredLeagues = computed(() => {
    return filterLeagues(leagues.value, filterBySport.value, searchQuery.value);
  });

  function setFilterSport(sport: string) {
    filterBySport.value = sport;
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query;
  }

  function clearFilters() {
    filterBySport.value = '';
    searchQuery.value = '';
  }

  watch(data, (newData) => {
    console.log('Fetched leagues:', newData);
    if (newData && newData.leagues) {
      leagues.value = newData.leagues.map((league) => ({
        id: league.idLeague,
        name: league.strLeague,
        sport: league.strSport,
        alternativeName: league.strLeagueAlternate || '',
      }));
      // Extract unique sports for filtering
      const uniqueSports = new Set<string>();
      leagues.value.forEach((league) => {
        uniqueSports.add(league.sport);
      });
      sports.value = Array.from(uniqueSports).sort();
    }
  });

  return {
    sports,
    leagues,
    filteredLeagues,
    isLoading,
    fetchError,
    filterBySport,
    searchQuery,
    fetchLeagues: execute,
    setFilterSport,
    setSearchQuery,
    clearFilters,
  };
});
