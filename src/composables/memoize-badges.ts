import { useMemoize } from '@vueuse/core';

export const useMemoizeBadges = useMemoize(async (badgeId: string): Promise<string> => {
  try {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${badgeId}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch badge: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.seasons || !data.seasons.length || !data.seasons[0].strBadge) {
      throw new Error('Badge data not found');
    }

    return data.seasons[0].strBadge;
  } catch (error) {
    console.error('Error fetching badge:', error);
    return '/default-club-picture.png'; // Provide a fallback image path
  }
});
