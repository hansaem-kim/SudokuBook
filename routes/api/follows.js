const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Follow = require('../../models/Follow');

router.get('/:id', (req, res) => {
    
    Follow.find({ follower: req.params.id })
        .then(follows => res.json(follows))
        .catch(err => res.send(err))
});

router.get('/f/:id', (req, res) => {
    
    Follow.find({ followee: req.params.id })
        .then(followers => res.json(followers))
        .catch(err => res.send(err))
});

router.post('/:followee', 
passport.authenticate('jwt', { session: false }),
(req, res) => {

    Follow.findOne({ followee: req.params.followee })
        .then(follow => {
            if (follow){
                res.send("Already follows")
            }
        })

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