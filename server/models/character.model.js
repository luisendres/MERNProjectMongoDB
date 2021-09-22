const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    User_Id: {
        type: Number
    },
    
    Name: {
        type: String,
        required: [true, "Name is required"]
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
        required: [true, "Health is required"]
    },

    Willpower: {
        type: Number,
        required: [true, "Willpower is required"]
    },

    EnergyType: {
        type: String,
        required: [true, "Energy type is required"]
    },

    EnergyInt: {
        type: Number,
        required: [true, "Energy number is required"]
    },

    VirtueType: {
        type: String,
        required: [true, "Virtue type is required"]
    },

    VirtueInt: {
        type: Number,
        required: [true, "Virtue number is required"]
    },

    Devoured: {
        type: Number
    },

    ShadowDeedNameSire: {
        type: String
    },

    Sigil: {
        type: String
    },

    Bank: {
        type: Number,
    }

    }, {timestamps: true}
);