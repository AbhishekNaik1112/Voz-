const express = require('express');
const router = express.Router();
const { models } = require('../models/sql/sequelize');

// Create User
router.post('/users', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = await models.User.create({ username, email, password, role });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});

// Get Users
router.get('/users', async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});

// Delete User
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.User.destroy({ where: { id } });

    if (user) {
      res.status(200).json({ message: 'User deleted successfully.' });
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
});

module.exports = router;
