const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const bcrypt = require('bcrypt');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded ({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

const UserRoute = require('./routes/UserRoute');
app.use('/user',UserRoute);

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");
const {destroy, findAll, findOne, create} = require("./controllers/UserControllers");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/',(req, res) => {
    res.render('index.ejs')
});

app.get('/signIN',(req, res) => {
    res.render('signIN')
});

app.get('/signIN', (req, res) => {
    res.render('signIN')
});

app.post('/', ((req, res) => {
    create(req, res)
}));

app.get('/', ((req, res) => {
    findAll(req, res)
}));

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})