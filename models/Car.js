const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    speed: { type: String, required: true }, // 0-60 mph
    topSpeed: { type: String, required: true },
    horsepower: { type: Number, required: true },
    description: { type: String, required: true },
    features: [String],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Car', carSchema);
