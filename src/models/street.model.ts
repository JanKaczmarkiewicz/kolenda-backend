import * as mongoose from "mongoose";
import { Street } from "interfaces/street.interface";

const streetSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const streetModel = mongoose.model<Street & mongoose.Document>(
  "Street",
  streetSchema
);

export default streetModel;
