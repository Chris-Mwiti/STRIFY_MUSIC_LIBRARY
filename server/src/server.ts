import express, { Request,Response } from "express";
import mongoose from "mongoose";
import appConfig from "./config/appConfig";
const app = express();

// @TODO: check on how to store env varialble with escape characters
appConfig(app,mongoose);