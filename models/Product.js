const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : { type: String , required: true, unique: true},
    desc : { type: String, require: true},
    img : {type: String, require: true},
    categories : {type: Array},
    merch : {type: String, require: true},
    team : {type: String, require: true},
    size : {type: String},
    price : {type: Number, require: true},
    instock : { type: Boolean, default:true}
},
{timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);
