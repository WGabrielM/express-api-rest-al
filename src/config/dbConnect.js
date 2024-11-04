import mongoose from "mongoose";

export default async function connectDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123456@cluster0.cvdcm.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"
  );
  return mongoose.connection;
}
