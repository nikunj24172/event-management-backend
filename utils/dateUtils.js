const { isSameDay, isBefore, isAfter } = require("date-fns");

const isToday = (date) => isSameDay(new Date(), new Date(date));

const isPast = (date) =>
  isBefore(new Date(date), new Date(date)) &&
  !isSameDay(new Date(), new Date(date));

const isFuture = (date) => isAfter(new Date(date), new Date());

module.exports = { isToday, isPast, isFuture };
