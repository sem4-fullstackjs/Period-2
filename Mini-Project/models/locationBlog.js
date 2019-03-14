var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LocatonBlogSchema = new Schema({
  info: { type: String, required: true },
  img: String,
  pos: {
    longitude: { type: String, require: true },
    latiitude: { type: String, require: true }
  },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  likedBy: [Schema.Types.ObjectId],
  created: { type: Date, default: Date.now },
  lastUpdated: Date
})

LocatonBlogSchema.virtual("likedByCount").get(function () {
  return this.likedBy.length
})

LocationBlogSchema.pre("update", function (next) {
  this.update({}, { $set: { lastUpdated: new Date() } })
  next()
})

var LocationBlog = mongoose.model("LocationBlog", LocatonBlogSchema)

module.exports = LocationBlog