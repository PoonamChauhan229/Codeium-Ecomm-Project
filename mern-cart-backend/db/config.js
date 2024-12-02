const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mern-cart');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}
module.exports=connectToMongoDB

