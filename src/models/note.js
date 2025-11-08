import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      requied: true,
      trim: true,
    },
    content: {
      type: String,
      requied: false,
      trim: true,
    },
    tag: {
      type: String,
      requied: false,
      enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', noteSchema);
