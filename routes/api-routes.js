var userList = require("../data");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    userList.User.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/users", function(req, res) {
    userList.User.create({
      user: req.body.user
    })
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.put("/api/users", function(req, res) {
    userList.User.update(
      {
        ship: req.body.ship
      },
      {
        where: {
          user: req.body.uesr
        }
      }
    );
  });
  app.delete("/api/users", function(req, res) {
    userList.User.destroy({
      where: {
        user: req.body.user
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
