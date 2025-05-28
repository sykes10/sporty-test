<template>
  <div class="w-full relative">
    <slot name="icon"></slot>
    <input
      :aria-label="label"
      :id="inputId"
      :type="type"
      v-model="modelValue"
      :placeholder="placeholder"
      class="w-full px-4 py-2 border rounded-lg outline-none text-black bg-white border-gray-300 focus:border-blue-500"
      :class="{
        'pl-10': $slots.icon,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineModel, useId } from 'vue';

withDefaults(
  defineProps<{
    label: string;
    placeholder?: string;
    type?: 'text'; // add more types as needed
  }>(),
  {
    type: 'text',
    placeholder: 'Type here...',
  },
);

const modelValue = defineModel<string>();

// Simple ID for label
const inputId = computed(() => `input-${useId()}`);
</script>
