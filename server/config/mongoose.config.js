const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/NewProduct', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then( ()=> console.log('Successfully connected to Database'))
    .catch( (err)=> console.log('Failed to connect to Database', err))