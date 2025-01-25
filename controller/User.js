const { User } = require("../model/User");
const { sanitizeUser } = require("../services/common");

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  try {
    const doc = await User.findById(id).exec();
    res.status(200).json({
      id: doc.id,
      role: doc.role,
      email: doc.email,
      address: doc.address,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
