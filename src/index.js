const express = require('express');
const connect = require('./config/database');
const routes = require('./routes/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
const run = () => {
    app.listen(3000, async() => {
        console.log('Server is running on port 3000');
        await connect();
        console.log('Database connected successfully');
    });
};

run();