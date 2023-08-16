const { Schema, model,} = require('mongoose');
const formatter= require('../utils/formatter')
const reactionSchema= require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength:[1,"Please enter at least one character!"],
      maxLength:[128,"Please use less than 128 characters!"]
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:(timestamp)=>formatter(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema
    ],
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
