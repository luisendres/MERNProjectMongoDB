const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    User_Id: {
        type: Number
    },
    
    Name: {
        type: String,
        required: [true, "Name is required"]
    },

    PlayerName: {
        type: String,
        required: [true, "Player name required"]
    },

    Faction: {
        type: String,
        required: [true, "Faction is required"]
    },

    Subfaction1: {
        type: String
    },

    Subfaction2: {
        type: String
    },

    Subfaction3: {
        type: String
    },

    Patron: {
        type: String
    },

    GenRank: {
        type: String
    },

    Passion: {
        type: String
    },

    Health: {
        type: Number,
        default: 10,
        required: [true, "Health is required"]
    },

    Willpower: {
        type: Number,
        default: 1,
        required: [true, "Willpower is required"]
    },

    EnergyType: {
        type: String,
        default: "Vitality",
        required: [true, "Energy type is required"]
    },

    EnergyInt: {
        type: Number,
        default: 10,
        required: [true, "Energy number is required"]
    },

    VirtueType: {
        type: String,
        default: "Humanity",
        required: [true, "Virtue type is required"]
    },

    VirtueInt: {
        type: Number,
        default: 7,
        required: [true, "Virtue number is required"]
    },

    Devoured: {
        type: Number,
        default: 0
    },

    ShadowDeedNameSire: {
        type: String
    },

    Sigil: {
        type: String
    },

    Bank: {
        type: Number,
        default: 0
    },

    Updated: {
        type: Array
    }

    }, {timestamps: true}
);


const Character = mongoose.model("Character", UserSchema);

module.exports = Character;