const express = require("express");
const {
  getAllEvents,
  createEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/EventControllers");
const router = express.Router();

router.get("/event", getAllEvents);
router.post("/event", createEvents);
router.get("/event/:id", getSingleEvent);
router.patch("/event/:id", updateEvent);
router.delete("/event/:id", deleteEvent);

module.exports = router;
