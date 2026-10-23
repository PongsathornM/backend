const express = require('express');


//instance
const app = express();
const PORT = 8383;

//middleware
app.use(express.json());

let users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"}
];

//rest api endpoints

//get index
app.get('/', (req,res) =>{
    res.send("Welcome to Backend");
});

//get all user
app.get('/api/users', (req,res) =>{
    res.status(200).json(users);
});

//post new user
app.post('/api/users', (req,res) =>{
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json({message: "new user added!", data: newUser});
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
