<template>
  <article class="bg-gray-800 p-4 rounded-lg shadow-md relative flex flex-col justify-between">
    <div
      v-if="image"
      class="bg-black/90 absolute w-full h-full inset-0 transition-colors duration-200 flex items-center justify-center rounded-lg"
    >
      <img :src="image" :alt="`${strLeague} badge`" class="object-scale-down w-full h-full" />
      <span class="absolute top-2 right-2 text-white cursor-pointer" @click.stop="image = ''">
        ✕
      </span>
    </div>
    <div class="text-gray-300 flex flex-col">
      <h2 class="font-bold text-lg mb-2">{{ strLeague }}</h2>
      <p v-if="strLeagueAlternate"><span class="font-bold">Name:</span> {{ strLeagueAlternate }}</p>
      <p><span class="font-bold">Sport:</span> {{ strSport }}</p>
    </div>
    <AppButton @click.stop="onClick"> See Badge </AppButton>
  </article>
</template>

<script setup lang="ts">
import { useMemoizeBadges } from '@/composables/memoize-badges';
import { ref } from 'vue';
import AppButton from '@/components/AppButton.vue';

const props = defineProps<{
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
}>();

const image = ref('');

async function onClick() {
  image.value = await useMemoizeBadges(props.idLeague);
}
</script>
