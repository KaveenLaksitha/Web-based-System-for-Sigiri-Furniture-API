const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    itemcode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    suppliername: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema); //creating a schema called Item

module.exports = Item;