'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  categories: String,
  body: String,
  tags: String,
  user: String,
  comments: [{username: {type: String}, body: {type: String}, createdAt: {type: Date, default: Date.now}}],
  posted: {type: Date, default: Date.now},
  active: Boolean
});

export default mongoose.model('Post', PostSchema);
