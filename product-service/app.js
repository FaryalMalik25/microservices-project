const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3002;

app.set('view engine', 'ejs');
app.set('views');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(productRoutes);

mongoose.connect('mongodb://mongo:27017/product-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Product service running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});