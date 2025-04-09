const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    checklist: [
      {
        text: String,
        done: { type: Boolean, default: false }
      }
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
  }, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;