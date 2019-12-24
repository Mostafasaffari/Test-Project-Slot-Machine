import mongoose, { Schema } from "mongoose";

export interface IError extends mongoose.Document {
  errorDetails: Object;
  createDate: Date;
}

const errorSchema: Schema = new mongoose.Schema({
  errorDetails: { type: Object, required: true },
  createDate: Date
});

errorSchema.pre<IError>("save", function(next) {
  if (!this.createDate) {
    this.createDate = new Date();
  }
  next();
});

export default mongoose.model<IError>("ErrorsHandle", errorSchema);
