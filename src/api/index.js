
import Application from "../application.js";
import express from 'express';

const app = express();



app.use(express.json())

const appInstance = new Application();

appInstance.main();
