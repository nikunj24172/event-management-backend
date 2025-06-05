const { isSameDay, isBefore, isAfter, startOfDay } = require("date-fns");


const isToday = (date) =>
  isSameDay(startOfDay(new Date()), startOfDay(new Date(date)));

const isPast = (date) =>
  isBefore(startOfDay(new Date(date)), startOfDay(new Date()));

const isFuture = (date) =>
  isAfter(startOfDay(new Date(date)), startOfDay(new Date()));

module.exports = { isToday, isPast, isFuture };