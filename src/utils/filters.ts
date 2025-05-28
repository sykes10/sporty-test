import type { League } from '@/stores/leagues';

export function filterLeaguesBySport(leagues: League[], sportFilter: string): League[] {
  if (!sportFilter) {
    return leagues;
  }

  return leagues.filter(league => league.sport === sportFilter);
}

export function searchLeaguesByName(leagues: League[], query: string): League[] {
  if (!query) {
    return leagues;
  }

  const lowercaseQuery = query.toLowerCase();

  return leagues.filter(league =>
    league.name.toLowerCase().includes(lowercaseQuery) ||
    league.alternativeName.toLowerCase().includes(lowercaseQuery)
  );
}

export function filterLeagues(
  leagues: League[],
  sportFilter: string,
  searchQuery: string
): League[] {
  // Apply sport filter first (usually reduces the dataset significantly)
  let filtered = filterLeaguesBySport(leagues, sportFilter);

  // Then apply search filter on the reduced dataset
  filtered = searchLeaguesByName(filtered, searchQuery);

  return filtered;
}
