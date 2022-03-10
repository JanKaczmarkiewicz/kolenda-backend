export interface PastoralVisit {
  _id: string;
  priest: string;
  acolytes: [string];
  scoutTime: Date;
  visitTime: Date;
  season: string;
}
