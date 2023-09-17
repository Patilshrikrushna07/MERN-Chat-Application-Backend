const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://Shri:1234@cluster0.erfnemm.mongodb.net/shop?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
