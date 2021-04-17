const mongoose = require("mongoose");

const GraphSchema = new mongoose.Schema({
  chart: {
    type: Array,
    required: true,
    trim: true,
    lowercase: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  }
});

const Graph = mongoose.model("graph", GraphSchema);

module.exports = Graph;