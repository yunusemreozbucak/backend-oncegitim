import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes';

//mongoose.connect('mongodb://localhost:27017/test',
//{useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req, res) => {
    res.send('ÖncEgitim Rest API');
});

app.listen(3300, () => console.log("ÇALIŞTI..."))
