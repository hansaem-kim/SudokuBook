const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Follow = require('../../models/Follow');

router.get('/:currentId', (req, res) => {
    Follow.find({ follower: req.params.currentId })
        .then(follows => res.json(follows))
});

router.post('/:followee', 
passport.authenticate('jwt', { session: false }),
(req, res) => {


    let follower = req.user.id || req.body.follower_id;

    const newFollow = new Follow({
        follower: follower,
        followee: req.params.followee
    });

    newFollow.save().then(follow => res.json(follow));
})

router.delete('/:followee', 
passport.authenticate('jwt', { session: false }),
(req, res) => {
    
    Follow.findOneAndRemove({ follower: req.user.id, followee: req.params.followee})
        .then(follow => res.json(follow));
})

module.exports = router;