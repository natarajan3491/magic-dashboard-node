const express = require('express');
const router = express.Router();
const graphModel = require("../models/graph");
/**
 * Check node api service 
 */
router.get('/', (req, res) => {
    res.send('Node api works');
});

/**
 * Check node api service 
 */
router.get('/chart', async (req, res) => {
    const graph = await graphModel.find({});
    try {
        res.send(graph);
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * Create chart api
 */
router.post("/chart", async (req, res) => {
    const graph = new graphModel(req.body);
    try {
      await graph.save();
      res.send(graph);
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * Update chart api
 */
router.patch("/chart/:id", async (req, res) => {
    try {
      var graph = await graphModel.findByIdAndUpdate(req.params.id, req.body);
      await graph.save();
      res.send();
    } catch (error) {
        res.status(500).send(error);
    }
  });

/**
 * Delete chart api
 */
  router.delete("/chart/:id", async (req, res) => {
    try {
      const graph = await graphModel.findByIdAndDelete(req.params.id);
      if (!graph) res.status(404).send("No item found");
      res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
  });
  

module.exports = router;
