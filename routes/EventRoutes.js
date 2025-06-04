const express = require("express");
const {
  getAllEvents,
  createEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/EventControllers");
const router = express.Router();

router.get("/get-all-events", getAllEvents);
router.post("/add-events", createEvents);
router.get("/edit-event/:id", getSingleEvent);
router.patch("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);

module.exports = router;
