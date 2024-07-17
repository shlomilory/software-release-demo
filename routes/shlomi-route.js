module.exports = (app) => {
  app.get("/shlomi", (req, res) => {
    res.send("You Shall Not Pass!");
  });
};
