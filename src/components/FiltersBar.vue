<template>
  <section class="flex gap-4 shadow-md bg-white">
    <div class="container mx-auto p-4 gap-4 grid grid-cols-[2fr_1fr]">
      <AppInput label="Search Leagues" placeholder="MLS..." v-model="searchQuery"></AppInput>
        <select
          v-model="filterBySport"
          class="w-full px-4 py-2 border rounded-lg outline-none text-black bg-white border-gray-300 focus:border-blue-500"
          placeholder="Select Sport"
        >
          <option value="" >All Sports</option>
          <option v-for="sport in sports" :key="sport" :value="sport">
            {{ sport }}
          </option>
        </select>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useLeaguesStore } from '@/stores/leagues';
import { storeToRefs } from 'pinia';
import AppInput from '@/components/AppInput.vue';
const {searchQuery, sports, filterBySport} = storeToRefs(useLeaguesStore());

</script>
