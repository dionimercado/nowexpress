module.exports = (req, res) => {
  res.json({
    endpoint: `${req.url} - Not found`,
    body: req.body,
    query: req.query,
    cookies: req.cookies
  });
};
