const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((cors({
    orgin: 'http://localhost:3000'
})))

require('./config/mongoose.config')
require('./routes/product.routes') (app);

app.listen( (port), () =>console.log(`Port Is Screeming @ Port :${port}`) );