import { useMemoize } from '@vueuse/core';

export const useMemoizeBadges = useMemoize(async (badgeId: string): Promise<string> => {
  return fetch(
    `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${badgeId}`,
  )
    .then((response) => response.json())
    .then((data) => data.seasons[0].strBadge);
});
