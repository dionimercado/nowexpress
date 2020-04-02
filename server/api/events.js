import data from "./data";

export default (req, res) => {
  res.json(data.events);
};
