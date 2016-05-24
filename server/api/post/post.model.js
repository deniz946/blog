'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  categories: String,
  body: String,
  tags: String,
  user: {name: String, username: String, email: String, img: String, bio: String },
  comments: [{username: {type: String}, img: {type: String}, body: {type: String}, createdAt: {type: Date, default: Date.now}}],
  posted: {type: Date, default: Date.now},
  active: Boolean
});

export default mongoose.model('Post', PostSchema);
