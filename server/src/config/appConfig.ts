import { Express } from "express";
import { Mongoose } from "mongoose";

 export default async function appConfig(app: Express, mongoose: Mongoose) {
  try {
    await mongoose
      .connect(
        'mongodb+srv://ChrisMwiti:P8LrLTTPci5nnZcU@cluster0.ax7kkcq.mongodb.net/?retryWrites=true&w=majority'
      )
      .then(() => {
        app.listen(process.env.PORT, () => {
          console.log("Server is up and ruuning");
        });
      })
  } catch (err) {
    console.error(err);
    throw err
  }
}
