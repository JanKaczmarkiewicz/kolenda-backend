import * as mongoose from "mongoose";
import { House } from "interfaces/house.interface";

const houseSchema = new mongoose.Schema({
  name: String,
  street: { type: mongoose.Schema.Types.ObjectId, ref: "Street" },
});

const houseModel = mongoose.model<House & mongoose.Document>(
  "House",
  houseSchema
);

export default houseModel;
