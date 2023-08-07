import express from "express";
import mongoose from "mongoose";
import appConfig from "./config/appConfig";
import {ArtistRouter} from "./routes/admin/api/Artists";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
const whiteListedNetworks: (string | undefined)[] = ["http://localhost:5500", "http://localhost:5173" ];
app.use(cors({
    origin:(origin,callback) =>{
        if(whiteListedNetworks.indexOf(origin) !== -1 || !origin){
            return callback(null,true);
        }
        return callback(new Error("Origin request not found in the whitelisted networks"), false);
    },
    credentials: true
}))
// Routes
// Admin
app.use('/admin/api/artists', ArtistRouter);

// @TODO: check on how to store env varialble with escape characters
appConfig(app,mongoose);
