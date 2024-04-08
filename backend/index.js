const admin = require("firebase-admin");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const userRoutes = require('./src/routes/users.routes');
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});