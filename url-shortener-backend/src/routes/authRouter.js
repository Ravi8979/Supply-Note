const express = require('express');
const router = express.authRouter();
const bcrypt =  require('jsonwenbtoken');

//Registration
router.post('/register', async(req, res) => {

});

//Login
router.post('/login', async (req, res) => {

});

//Logout
router.post('./logout', async(req, res) =>{
    //implement user logout logic
});

module.exports = router;