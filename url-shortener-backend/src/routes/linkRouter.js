//links
const express = reqiure('express');
const router = express.linkRouter();

//Include links model and authentication middleware

//Creater link
router.post('./', async(req, res) =>{
    //Implement link creation logic
});

//retrieve links
router.get('./', (req, res) =>{
    //Implement link retrieval logic
});

modules.export = router;