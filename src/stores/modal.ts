import { defineStore } from 'pinia';
import { ref, shallowRef } from 'vue';
import type { Component } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false);
  const currentComponent = shallowRef<Component | null>(null);

  function openModal(component: Component) {
    currentComponent.value = component;
    isOpen.value = true;
  }

  function closeModal() {
    isOpen.value = false;
    currentComponent.value = null;
  }

  return {
    isOpen,
    currentComponent,
    openModal,
    closeModal,
  };
});
