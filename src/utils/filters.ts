// Utility functions for filtering leagues
import type { League } from '@/stores/leagues';

/**
 * Filters leagues by sport
 * @param leagues Array of leagues to filter
 * @param sportFilter Sport to filter by (empty string for no filter)
 * @returns Filtered array of leagues
 */
export function filterLeaguesBySport(leagues: League[], sportFilter: string): League[] {
  if (!sportFilter) {
    return leagues;
  }

  return leagues.filter(league => league.sport === sportFilter);
}

/**
 * Searches leagues by name or alternative name
 * @param leagues Array of leagues to search
 * @param query Search query (empty string for no filter)
 * @returns Filtered array of leagues
 */
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

/**
 * Apply all filters to leagues
 * @param leagues Array of leagues to filter
 * @param sportFilter Sport filter
 * @param searchQuery Search query
 * @returns Filtered array of leagues
 */
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
