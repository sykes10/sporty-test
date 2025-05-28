import { describe, it, expect } from 'vitest';
import { filterLeaguesBySport, searchLeaguesByName, filterLeagues } from '@/utils/filters';
import type { League } from '@/stores/leagues';

// Mock data for testing
const mockLeagues: League[] = [
  {
    id: '1',
    name: 'Premier League',
    sport: 'Soccer',
    alternativeName: 'English Premier League',
  },
  {
    id: '2',
    name: 'La Liga',
    sport: 'Soccer',
    alternativeName: 'Primera División',
  },
  {
    id: '3',
    name: 'NBA',
    sport: 'Basketball',
    alternativeName: 'National Basketball Association',
  },
  {
    id: '4',
    name: 'NFL',
    sport: 'American Football',
    alternativeName: 'National Football League',
  },
  {
    id: '5',
    name: 'MLB',
    sport: 'Baseball',
    alternativeName: 'Major League Baseball',
  },
];

describe('filterLeaguesBySport', () => {
  it('should return all leagues when sportFilter is empty', () => {
    const result = filterLeaguesBySport(mockLeagues, '');
    expect(result).toEqual(mockLeagues);
    expect(result.length).toBe(5);
  });

  it('should filter leagues by sport correctly', () => {
    const result = filterLeaguesBySport(mockLeagues, 'Soccer');
    expect(result.length).toBe(2);
    expect(result[0].name).toBe('Premier League');
    expect(result[1].name).toBe('La Liga');
  });

  it('should return empty array when no matches found', () => {
    const result = filterLeaguesBySport(mockLeagues, 'Hockey');
    expect(result).toEqual([]);
    expect(result.length).toBe(0);
  });
});

describe('searchLeaguesByName', () => {
  it('should return all leagues when query is empty', () => {
    const result = searchLeaguesByName(mockLeagues, '');
    expect(result).toEqual(mockLeagues);
    expect(result.length).toBe(5);
  });

  it('should find leagues by name correctly', () => {
    const result = searchLeaguesByName(mockLeagues, 'league');
    expect(result.length).toBe(3);
    expect(result[0].name).toBe('Premier League');
  });

  it('should find leagues by alternative name correctly', () => {
    const result = searchLeaguesByName(mockLeagues, 'national');
    expect(result.length).toBe(2);
    expect(result.map((league) => league.id)).toContain('3'); // NBA
    expect(result.map((league) => league.id)).toContain('4'); // NFL
  });

  it('should be case insensitive', () => {
    const result = searchLeaguesByName(mockLeagues, 'premier');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Premier League');

    const resultLower = searchLeaguesByName(mockLeagues, 'PREMIER');
    expect(resultLower.length).toBe(1);
    expect(resultLower[0].name).toBe('Premier League');
  });

  it('should return empty array when no matches found', () => {
    const result = searchLeaguesByName(mockLeagues, 'xyz123');
    expect(result).toEqual([]);
    expect(result.length).toBe(0);
  });
});

describe('filterLeagues', () => {
  it('should return all leagues when no filters are applied', () => {
    const result = filterLeagues(mockLeagues, '', '');
    expect(result).toEqual(mockLeagues);
    expect(result.length).toBe(5);
  });

  it('should apply both filters correctly', () => {
    const result = filterLeagues(mockLeagues, 'Soccer', 'premier');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Premier League');
    expect(result[0].sport).toBe('Soccer');
  });

  it('should return empty array when no matches found after filtering', () => {
    const result = filterLeagues(mockLeagues, 'Soccer', 'basketball');
    expect(result).toEqual([]);
    expect(result.length).toBe(0);
  });
});
