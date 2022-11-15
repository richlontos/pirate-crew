const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate name is required"],
        unique: true
    },
    imageUrl: {
        type: String,
        required: [true, "Image URL is required"]
    },
    treasureChests: {
        type: Number,
        required: [true, "Please select number of treasure chests"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch phrase is required"]
    },
    crewPosition: {
        type: String,
        required: [true, "Crew position is required"],
        enum: ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;