const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (firstname, lastname, username, email, company, password_digest)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `, [user.firstname, user.lastname, user.username, user.email, user.company, user.password_digest]);
};

module.exports = User;
