const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get('/', async (req, res) => {
  const users = await User.find();
  res.render('users', {users: users});
});

router.get('/users/add-user', (req, res) => {
  res.render('index');
})

router.post('/users/add-user', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  
  res.redirect('/');
});

module.exports = router;