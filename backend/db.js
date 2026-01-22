const mongoose = require('mongoose');

const uri = "mongodb+srv://youneslimoury6999_db_user:younesyounes@cluster0.osjmme6.mongodb.net/ecommerceDB?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log('MongoDB Connected ✅'))
  .catch(err => console.error('Connection error ❌', err));
