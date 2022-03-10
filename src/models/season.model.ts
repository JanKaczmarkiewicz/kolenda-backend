import * as mongoose from "mongoose";
import { Season } from "interfaces/season.interface";

const seasonSchema = new mongoose.Schema({
  year: {
    type: Number,
    unique: true,
  },
});

const seasonModel = mongoose.model<Season & mongoose.Document>(
  "Season",
  seasonSchema
);

export default seasonModel;
