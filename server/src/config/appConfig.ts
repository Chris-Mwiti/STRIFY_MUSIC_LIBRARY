import { Express } from "express";
import { Mongoose } from "mongoose";

 export default function appConfig(app: Express, mongoose: Mongoose) {
  try {
    mongoose
      .connect(
        process.env.MONGODB_TOKEN_URL as string
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
