const router = require("express").Router();
const User = require("../../models/user.model");
const passport = require("passport")

// log user out
router.get("/", (req, res) => {
  req.logout()
  res.send("hi")
});

router.delete("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // User.deleteOne({ email: username }, (err, foundUser) => {
  //   if (err) {
  //     res.json(err);
  //   } else {
  //     // Load hash from your password DB.
  //     if (foundUser) {
  //       bcrypt.compare(password, foundUser.password, (err, result) => {
  //         if (result === true) {
  //           res.send("Deleted user")
  //         } else {
  //           res.status(404).send("Password is incorrect")
  //         }
  //       });
  //     } else {
  //       res.status(404).send("User not found")
  //     }
      
  //   }
  // });
});

module.exports = router;
