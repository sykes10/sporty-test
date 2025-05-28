import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useMemoizeBadges } from '@/composables/memoize-badges';

export const useBadgeStore = defineStore('badge', () => {
  const badgeToShow = ref('');

  async function getBadge(badgeId: string) {
    try {
      badgeToShow.value = await useMemoizeBadges(badgeId);
    } catch (error) {
      console.error('Error fetching badge:', error);
      badgeToShow.value = ''; // Clear the badge if there's an error
    }
  }
  function clearBadge() {
    badgeToShow.value = '';
  }

  return { badgeToShow, getBadge, clearBadge };
});
