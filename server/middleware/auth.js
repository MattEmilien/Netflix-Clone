const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided." });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send({ message: "Failed to authenticate token." });
  }
  return next();
};

module.exports = verifyToken;
