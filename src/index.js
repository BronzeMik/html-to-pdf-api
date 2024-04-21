
import Application from "./application.js";
import express from 'express';

const app = express();
const port = 3000;


app.use(express.json())

const appInstance = new Application();

appInstance.main();
