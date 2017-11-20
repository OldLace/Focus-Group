const db = require('../db/config');

const UserProfile = {};

UserProfile.findAll = () => {
  return db.query('SELECT * FROM user_profiles ORDER BY lastname ASC');
}

UserProfile.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM user_profiles
    WHERE id = $1
 `, [id]);
}


UserProfile.update = () => {
  return db.one(`
    UPDATE user_profiles SET
    age = $1,
    sex = $2,
    height = $3,
    weight = $4,
    income = $5,
    street_address = $6,
    city = $7,
    state = $8,
    user_id = $9
  `,  [userprofile.age, userprofile.sex, userprofile.height, userprofile.weight, userprofile.income, userprofile.street_address, userprofile.city, userprofile.state, userprofile.zip, userprofile.user_id]);
}


module.exports = FocusGroup;
