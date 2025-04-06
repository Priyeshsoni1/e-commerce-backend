const { User } = require("../model/User");
const crypto = require("crypto");
const { sanitizeUser } = require("../services/common");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      req.body.password,
      salt,
      310000,
      32,
      "sha256",
      async function (err, hashedPassword) {
        const user = new User({ ...req.body, password: hashedPassword, salt });
        const doc = await user.save();
        req.login(sanitizeUser(doc), (err) => {
          if (err) {
            res.status(400).json(err);
          }
          const token = jwt.sign(sanitizeUser(doc), process.env.JWT_SECRET_KEY);
          res
            .cookie("jwt", token, {
              expires: new Date(Date.now() + 3600000),
              httpOnly: true,
            })
            .status(201)
            .json({ id: doc.id, role: doc.role });
        });
      }
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.loginUser = async (req, res) => {
  const user = req.user;
  res
    .cookie("jwt", user.token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      secure: false,
    })
    .status(201)
    .json({ id: user.id, role: user.role });
};

exports.logout = async (req, res) => {
  res
    .cookie("jwt", null, {
      maxAge: 0, // Expire the cookie immediately
      httpOnly: true, // Prevent access via JavaScript
      // secure: process.env.NODE_ENV === 'production',  Ensure secure cookie only in production
      sameSite: "None", // Allow cookies to be sent cross-origin
    })
    .sendStatus(200); // Return a 200 status indicating successful logout
};

exports.checkAuth = async (req, res) => {
  console.log(req.user, "auth page");
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
};

exports.resetPasswordRequest = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  if (user) {
    const token = crypto.randomBytes(48).toString("hex");
    user.resetPasswordToken = token;
    await user.save();

    // Also set token in email
    const resetPageLink =
      "http://localhost:3000/reset-password?token=" + token + "&email=" + email;
    const subject = "reset password for e-commerce";
    const html = `<p>Click <a href='${resetPageLink}'>here</a> to Reset Password</p>`;

    // lets send email and a token in the mail body so we can verify that user has clicked right link

    if (email) {
      const response = await sendMail({ to: email, subject, html });
      res.json(response);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
};

exports.resetPassword = async (req, res) => {
  const { email, password, token } = req.body;

  const user = await User.findOne({ email: email, resetPasswordToken: token });
  if (user) {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      password,
      salt,
      310000,
      32,
      "sha256",
      async function (err, hashedPassword) {
        user.password = hashedPassword;
        user.salt = salt;
        await user.save();
        const subject = "password successfully reset for e-commerce";
        const html = `<p>Successfully able to Reset Password</p>`;
        if (email) {
          const response = await sendMail({ to: email, subject, html });
          res.json(response);
        } else {
          res.sendStatus(400);
        }
      }
    );
  } else {
    res.sendStatus(400);
  }
};
