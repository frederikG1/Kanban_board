export function isLoggedIn(req, res, next) {
  if (!req.session.user) {
    return res.status(401).send({ errorMessage: "You are not logged ind" });
  }
  next();
}
