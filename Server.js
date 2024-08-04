const express = require('express');
const app = express();
const port = 3000;
const db = require('./db'); // Ensure db.js is required to initiate DB connection

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRoutes=require('./routes/PersonRoutes');
app.use('/person',personRoutes);

const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);


app.get('/', (req, res) => {
    res.send('Welcome');
});


// post and get for menu 



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
