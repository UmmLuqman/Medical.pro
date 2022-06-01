const express = require("express");
const path = require('path');
const {v4} = require('uuid');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const methodOverride = require('method-override')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
const app = express();
const bcrypt = require('bcrypt');
app.set('view engine', 'ejs');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded ({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.use(methodOverride('_method'))

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

let CONTACTS = [
    {id: v4(), name: 'Asiya', value: '+7-708-123-45-67', marked: false}
]

app.use(express.json);

app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1000)
})

app.post('/api/contacts', (req, res) => {
    const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

app.delete('/api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'Contact has been deleted'})
})

app.put('/api/contacts/:id', (req, res) => {
    const idx = CONTACTS.findIndex(c => c.id === req.params.id)
    CONTACTS[idx] = req.body
    res.json(CONTACTS[idx])
})

app.get('/login', (req, res, next) => {
    // the same as res.render('relative_views_path_to_ejsTemplateName', {});
    res.render('relative_views_path_to_your.html', {
    });


app.get('/login', (req, res, next) => {
    // the same as res.render('relative_views_path_to_ejsTemplateName', {});
    res.render('login', {
});

app.get('/clinics', (req, res) => {
        res.render('clinics')
});

app.get('/consultation', (req, res) => {
    res.render('consultation')
});

app.get('/findaDoctor', (req, res) => {
    res.render('findaDoctor')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/aid', (req, res) => {
        res.render('aid')
});

app.post('/', ((req, res) => {
    create(req, res)
}));

app.get('/', ((req, res) => {
    findAll(req, res)
}));

    app.get('/find', (req, res) => {
        res.render('find');
    });

    app.get('/update', (req, res) => {
        res.render('update');
    });

    app.get('/delete', (req, res) => {
        res.render('delete');
    });

        let port     = process.env.PORT||3000;
        // if (port == null || port == "") {
        //     port = 3000;
        // }

        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`)
        })
    })
})