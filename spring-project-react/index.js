const express = require('express');
const cors = require('cors');
require('./db');

const usersRouter = require('./api/routes/users');
const itemsRouter = require('./api/routes/items');

const app = express();

app.use(cors());
app.use(express.static('config'));
app.use(express.json());
app.use(usersRouter);
app.use(itemsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT} port`);
});