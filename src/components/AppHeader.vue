<template>
  <header class="bg-blue-600">
    <nav class="container mx-auto p-4 text-white flex items-center gap-2">
      <Trophy :size="32"></Trophy>
      <h1 class="text-3xl font-bold ">Sporty.com</h1>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { Trophy } from 'lucide-vue-next';
</script>
