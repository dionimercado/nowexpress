const events = [
  { id: 1, title: "Event One" },
  { id: 2, title: "Event Two" },
  { id: 3, title: "Event Three" }
];

module.exports = (req, res) => {
  res.json(events[0]);
};
