import { connectDatabase } from 
"./mongo.database.ts";
import Express from "express";
const express = Express;
const app = express();
const port = 3000;
connectDatabase();