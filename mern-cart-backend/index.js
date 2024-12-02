const express = require('express');
const productRoute = require('./routes/productRoutes');
const cartRoute = require('./routes/cartRoutes');

const app = express();
const port = 8000;
const cors = require('cors');
const connectToMongoDB = require('./db/config');

// Connect to MongoDB
connectToMongoDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(productRoute);
app.use(cartRoute);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
