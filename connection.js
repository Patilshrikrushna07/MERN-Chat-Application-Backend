const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://<Username>:<Password >@cluster0.3o7cssk.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
