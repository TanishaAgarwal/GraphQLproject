const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://MyUser:tanisha2502@cluster0-vonld.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('running db');
})

const app = express();
app.use(cors());


app.use('/graphql', graphqlHTTP({ 
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});