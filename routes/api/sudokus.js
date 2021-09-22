const express = require("express");
const router = express.Router();
const Sudoku = require('../../models/Sudoku');

router.get('/:id', (req, res) => {
    Sudoku 
        .findOne({id: req.params.id})
        .then(sudoku => res.json(sudoku))
        .catch(err => res.status(400).json(err))
});

router.get('/', (req, res) => {
    Sudoku.find()
        .then(sudokus => res.json(sudokus))
        .catch(err => res.status(404).json({ nosudokusfound: 'No sudokus found' }));

});

router.patch('/', (req, res) => {

    let update = {"$push": { "scores": { time: req.body.time, user: req.body.user } }};


    let options = { new: true };
    
    Sudoku.findByIdAndUpdate(req.body.id, update, options, (err, doc) => {
  
        if (err){
            res.json(err);
        }
        res.json(doc);
    });
    

});

module.exports = router;