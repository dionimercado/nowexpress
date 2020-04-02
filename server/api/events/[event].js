import data from "../data";

export default (req, res) => {
  const event = data.events.find(event => event.id == req.query.event);
  res.json(event);
};
