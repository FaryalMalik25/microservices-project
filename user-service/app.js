const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(userRoutes);

mongoose.connect('mongodb://mongo:27017/user-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`User service running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});