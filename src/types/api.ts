export type LeagueResponse = {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
};

export type LeaguesResponse = {
  leagues: LeagueResponse[];
};
