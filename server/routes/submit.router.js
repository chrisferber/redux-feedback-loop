const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const insertFeedback = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    const newSubmission = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];

    console.log(newSubmission);
    
    pool.query(insertFeedback, newSubmission)
    .then(res => {
        console.log(`results from INSERT INTO feedback: ${res}`)
        res.sendStatus(200);
    }).catch(err => {
        console.log(`Error adding new submission to database`, err);
        res.sendStatus(500);
    })
})

module.exports = router;