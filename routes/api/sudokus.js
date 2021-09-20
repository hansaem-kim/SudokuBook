const express = require("express");
const router = express.Router();
const Sudoku = require('../../models/Sudoku');

router.get('/sudoku/:id', (req, res) => {
    Sudoku 
        .findById(req.params.id)
        .then(sudoku => res.json(sudoku))
        .catch(err => res.status(400).json(err))
})