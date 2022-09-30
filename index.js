import express from "express";
import dotenv, { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser"; //require for post to mongodb
import {PORT} from './utils/config.js'
import { user_router } from "./routers/user_router.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  console.log(JSON.stringify({ Host: request.headers.host }));
  response.end("<h1>Backend</h1>");
});

app.use('/api/users', user_router)
// const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
