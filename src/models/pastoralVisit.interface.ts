import * as mongoose from "mongoose";
import { PastoralVisit } from "interfaces/pastoralVisit.interface";

const entrySchema = new mongoose.Schema({
  priest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Priest",
  },
  acolytes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Acolyte",
    },
  ],
  season: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Season",
  },
  scoutTime: Date,
  visitTime: Date,
});

const entryModel = mongoose.model<PastoralVisit & mongoose.Document>(
  "Entry",
  entrySchema
);

export default entryModel;
