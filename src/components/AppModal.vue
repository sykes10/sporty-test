<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modalStore.isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/80 bg-opacity-50 backdrop-blur-sm"
          @click="modalStore.closeModal"
        ></div>

        <!-- Modal Content -->
        <div class="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-auto z-10">
          <!-- Close Button -->
          <button
            class="absolute right-4 top-4 text-black hover:text-gray-700"
            @click="modalStore.closeModal"
          >
            <X></X>
          </button>

          <!-- Dynamic Component -->
          <div class="p-6">
            <component :is="modalStore.currentComponent" v-if="modalStore.currentComponent" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { X } from 'lucide-vue-next'
const modalStore = useModalStore();
</script>
