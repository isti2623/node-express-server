const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node Express Server');
});
const users = [
    {
        "id": 0,
        "name": "Isti ton",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 1,
        "name": "rid mon",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 2,
        "name": "sfe gon",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 3,
        "name": "raf tos",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 4,
        "name": "kos opn",
        "username": "Bret",
        "email": "Sincere@april.biz",
    }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }

});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser)
    console.log('post hit', req.body);
    res.send('inside pose');
})

app.get('/fruits/mangoes/himsagor', (req, res) => {
    res.send('Yummy Tasty Aam');
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.listen(port, () => {
    console.log('Listenting to port', port);
})