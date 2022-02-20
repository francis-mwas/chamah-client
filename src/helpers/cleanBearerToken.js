export default function (token) {
  try {
    return token.split('Bearer ')[1];
      token = req.headers.authorization.split(' ')[1];
  } catch (e) {
    throw 'Invalid token';
  }
}
