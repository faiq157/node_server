const express = require("express");
const router = express.Router();
const Menu = require("./../models/Menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const menu = new Menu(data);
    await menu.save();
    console.log("data Saved ....");
    res.status(200).json(menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `internal Server error ` });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("Data is Fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `internal Server error ` });
  }
});

router.get("/:tastesType", async (req, res) => {
  try {
    const tastesType = req.params.tastesType;
    if (tastesType == "spicy" || tastesType == "sweet") {
      const response = await Menu.find({ tastes: tastesType });
      console.log("Date Fectched");
      res.status(200).json(response);
    } else {
      res.status(404).json("Invalid tast Type");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `internal Server error ` });
  }
});

module.exports = router;
