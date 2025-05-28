<template>
  <select
    :id="inputId"
    v-model="modelValue"
    :aria-label="label"
    class="w-full px-4 py-2 border rounded-lg outline-none text-black bg-white border-gray-300 focus:border-blue-500"
  >
    <option value="" selected>{{ placeholder }}</option>
    <option v-for="option in normalizedOptions" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed, defineModel, useId } from 'vue';

interface Option {
  value: string;
  label: string;
}

const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    options: Option[] | string[];
  }>(),
  {
    placeholder: 'Select an option...',
  },
);

const modelValue = defineModel<string>();

// Simple ID for label
const inputId = computed(() => `select-${useId()}`);

// Process options to ensure they're in the correct format
const normalizedOptions = computed(() => {
  if (props.options.length === 0) {
    return [];
  }

  if (typeof props.options[0] === 'string') {
    return (props.options as string[]).map((opt) => ({
      value: opt,
      label: opt,
    }));
  }

  return props.options as Option[];
});
</script>
