<template>
  <article class="p-4 rounded-lg shadow-lg relative flex flex-col justify-between gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
           @click="onClick">
      <h2 class="font-bold text-xl">{{ league.name }}</h2>
      <p v-if="league.alternativeName"><span class="font-bold">AKA:</span> {{ league.alternativeName }}</p>
      <span class="font-bold rounded-full bg-blue-200 text-blue-800 px-3 py-1 self-start">{{league.sport }} </span>
  </article>
</template>

<script setup lang="ts">
import { h } from 'vue';
import type { League } from '@/stores/leagues';
import { useModalStore } from '@/stores/modal';
import LeagueDetailModal from '@/components/LeagueDetailModal.vue';

const props = defineProps<{
  league: League
}>();

const modalStore = useModalStore();

function onClick() {
  modalStore.openModal({
    render() {
      return h(LeagueDetailModal, { league: props.league });
    }
  });
}
</script>
