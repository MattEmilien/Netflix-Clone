const express = require('express');
const router = express.Router();
const User = require('../models/user');

// * FETCH ALL USERS

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});


// * FETCH USER BY USERNAME

router.get('/:username', async (req, res) => {
    try { res.json( res.json(User.findOne({username: req.params.username})) ) } 
    catch (err) { res.status(500).json(err) } 
})

// * FETCH USER BY EMAIL

router.get('/:email', async (req, res) => {
    try { res.json( res.json(User.findOne({email: req.params.email})) ) } 
    catch (err) { res.status(500).json(err) } 
})

// TODO: CREATE USER

router.post('/add', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: DELETE USER BY EMAIL

router.delete('/remove', async (req, res) => {
    try {
        const email = req.query.email;


        const user = await User.findOneAndDelete({ email });
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (err) {  res.status(500).json(err); }
});

// TODO: UPDATE USER BY EMAIL

router.patch('/update', async (req, res) => {
    try {
        const email = req.query.email;
        const update = req.body;

        const user = await User.findOneAndUpdate({ email }, update);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(update);
    } catch (err) {  res.status(500).json(err); }
});



module.exports = router;