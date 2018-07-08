const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

app.get("/users", (req, res) => {
  User.find({}, (err, users) =>{
    console.log("userRoutes.js > Users: ", users);
    if (err) return res.send(err);
    res.send(users);
  });
});

app.post("/users", (req, res) => {
  let newUser = new User(req.body);

  // if (!(req.body.firstName || req.body.lastName)) {
  //   handleError(res, "Invalid user input", "Must provide a first or last name.", 400)
  // }

  newUser.save()
    .then(user => {
      res.send("user saved to the database");
    })
    .catch(err => {
      res.status(400).send("unable to save to the database");
    });
});
}