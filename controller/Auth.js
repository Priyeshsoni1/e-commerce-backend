const { User } = require("../model/User");

exports.createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const doc = await user.save();
    const userResponse = {
      id: doc.id,
      email: doc.email,
      address: doc.address,
      orders: doc.orders,
    };

    res.status(201).json(userResponse);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      res.status(401).json({ message: "no such user email" });
    } else if (user.password === req.body.password) {
      const userResponse = {
        id: user.id,
        email: user.email,
        address: user.address,
        orders: user.orders,
      };
      res.status(201).json(userResponse);
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
