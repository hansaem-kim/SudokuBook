const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SudokuSchema = new Schema({
        puzzle: [Number],
        answer: [Number],
        scores: {
            type: Array,
            required: false
        }  
    },
    {
        timestamps: true
    }
)

const Sudoku = mongoose.model('sudoku', SudokuSchema);
module.exports = Sudoku;