import mongoose, { mongo } from "mongoose";

export default async function connectDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_SRING);
  return mongoose.connection;
}
