const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const person = new Person(data);
    await person.save();
    console.log("data Saved ....");
    res.status(200).json(person);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `internal Server error ` });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data is Fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `internal Server error ` });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `internal Server error ` });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const Personid = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      Personid,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `internal Server error ` });
  }
});

module.exports = router;
