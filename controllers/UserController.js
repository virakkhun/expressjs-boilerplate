module.exports = {
  get: (req, res) => {
    res.send(`Hello ${req.params.userName}`);
  },
};
