export type League = {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
};

export type LeaguesResponse = {
  leagues: League[];
};
