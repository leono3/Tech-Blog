const { User } = require("../models");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.session.save(() => {
      req.session.user = newUser;
      req.session.isLoggedIn = true;
      res.json(newUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const signIn = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!existingUser) {
      return res.status(401).json({ error: "Inccorect login credentials." });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Inccorect login credentials." });
    }
    req.session.save(() => {
      req.session.user = existingUser;
      req.session.isLoggedIn = true;
      res.json({ success: true });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const signOut = async (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      res.render("homePage", {
        isLoggedIn: false,
      });
    });
  }
};

module.exports = {
  signIn,
  signUp,
  signOut,
};
