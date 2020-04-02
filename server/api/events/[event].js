import data from "../data";

export default (req, res) => {
  const eventId = req.query.event || req.params.id;
  const event = data.events.find(event => event.id == eventId);
  res.json(event);
};
