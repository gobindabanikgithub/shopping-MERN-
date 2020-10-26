const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const itmes =require('./routers/api/items') 


const app= express();

// body perser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

// use routes
app.use('/api/items',itmes);


// Serve atatic assets if in production

if(process.env.NODE_ENV=== 'production'){
    app.use(express.static('client/build'));

    app.get('*'),(req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }
}
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server started on port ${port}`));




