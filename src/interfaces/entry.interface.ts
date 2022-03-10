export enum EntryResult {
  unknown = "unknown",
  accepted = "accepted",
  rejected = "rejected",
  uncertain = "uncertain",
}

export interface Entry {
  _id: string;
  visit: EntryResult;
}
