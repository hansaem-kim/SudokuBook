const express = require("express");
const router = express.Router();
const Sudoku = require('../../models/Sudoku');

router.get('/:id', (req, res) => {
    Sudoku 
        .findOne({id: req.params.id})
        .then(sudoku => res.json(sudoku))
        .catch(err => res.status(400).json(err))
})

router.get('/', (req, res) => {
    Sudoku.find()
        .then(sudokus => res.json(sudokus))
        .catch(err => res.status(404).json({ nosudokusfound: 'No sudokus found' }));

})

module.exports = router;