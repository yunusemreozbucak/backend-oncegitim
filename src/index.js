import express from 'express';
import bodyParser from 'body-parser';
import { router } from "./routes"
import connect from "./models/db";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// use the routes
app.use(router)

let mongooseuri = "mongodb+srv://emre:<password>@oncegitim.lc7ns.mongodb.net/<dbname>?retryWrites=true&w=majority";


app.listen(3300, () => {
    console.log("Çalıştı!");
    // connect(mongooseuri);
})