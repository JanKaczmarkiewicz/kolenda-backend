import * as mongoose from "mongoose";
import { EntryResult, Entry } from "interfaces/entry.interface";

const entrySchema = new mongoose.Schema({
  visit: {
    type: String,
    enum: EntryResult,
  },
  scout: {
    type: String,
    enum: EntryResult,
  },
  comment: {
    type: String,
  },
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "House",
  },
  pastoralVisit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PastoralVisit",
  },
});

const entryModel = mongoose.model<Entry & mongoose.Document>(
  "Entry",
  entrySchema
);

export default entryModel;
