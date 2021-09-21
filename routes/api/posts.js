const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/Post');
const User = require('../../models/User')
const validatePostInput = require('../../validation/posts');

router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({ user: req.params.user_id })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' }
            )
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);
        

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            text: req.body.text,
            user: req.user.id,
            puzzle: req.body.puzzle //?
        });

        newPost.save()
            .then(post => {
                res.send(post);
            });
    }
);

router.patch('/:id', (req, res) => {

    let update = {
        text: req.body.text
    }

    Post.findByIdAndUpdate( req.params.id, update, { new: true }, (err, doc) => {
        if (err){ res.json(err) };
        res.json(doc);
    })
});

router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id).then(post => {
        res.json(post);
    })
});

router.get('/:postId', (req, res) => {

    Post.findById(req.params.postId).then( post => {
        res.json(post);
    })
})

module.exports = router;