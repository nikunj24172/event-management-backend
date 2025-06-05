const { request } = require("express");
const Event = require("../models/Events");
const { isToday, isFuture } = require("../utils/dateUtils");

const getAllEvents = async (request, response) => {
  try {
    const events = await Event.find({ isActive: true }).sort({ date: 1 });

    const categorizedEvents = {
      today: [],
      future: [],
      past: [],
    };

    events.forEach((event) => {
      const eventDate = new Date(event.date);

      if (isToday(eventDate)) {
        categorizedEvents.today.push(event);
      } else if (isFuture(eventDate)) {
        categorizedEvents.future.push(event);
      } else {
        categorizedEvents.past.push(event);
      }
    });

    response.status(200).json({ message: categorizedEvents });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const createEvents = async (request, response) => {
  const { title, description, date, time, location } = request.body;
  try {
    const event = new Event({ title, description, date, time, location });
    await event.save();

    response.status(201).json({ message: "Event Created Successfully", event });
  } catch (error) {}
};

const getSingleEvent = async (request, response) => {
  try {
    const { id } = request.params;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    return response.status(200).json(event);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const updateEvent = async (request, response) => {
  const eventId = request.params.id;
  if (!eventId) {
    return response.status(400).json({ message: "Event ID is required" });
  }
  try {
    const event = await Event.findByIdAndUpdate(eventId, request.body, {
      new: true,
    });

    if (!event) {
      return response.status(404).json({ message: "Event not found" });
    }
    response.status(200).json({ message: "Event Updated Successfully", event });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

const deleteEvent = async (request, response) => {
  try {
    const deletedCount = await Event.findByIdAndUpdate(
      request.params.id,
      { isActive: false },
      { new: true }
    );
    if (!deletedCount) {
      return response.status(404).json({ message: "Event not found" });
    }
    response
      .status(200)
      .json({ message: "Event Deleted Successfully..", deletedCount });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEvents,
  createEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
