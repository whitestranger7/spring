const express = require('express');
const cors = require('cors');

const loginRouter = require('./api/routes/login');
const projectsRouter = require('./api/routes/projects');

const app = express();

app.use(cors());
app.use(express.json());
app.use(loginRouter);
app.use(projectsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT} port`);
});