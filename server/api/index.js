module.exports = (req, res) => {
  res.json({ endpoint: `${req.url} - Not found` });
};
