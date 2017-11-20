const db = require('../db/config');

const ClientProfile = {};

ClientProfile.findAll = () => {
  return db.query('SELECT * FROM user_profiles');
};

ClientProfile.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM user_profiles
    WHERE id = $1
 `, [id]);
};

ClientProfile.create = (ClientProfile, id) => {
  return db.one(`
    INSERT INTO user_profiles
    (age, sex, height, weight, income, street_address, city, state, zip, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *
  `, [ClientProfile.age, ClientProfile.sex, ClientProfile.height, ClientProfile.weight, ClientProfile.income, ClientProfile.street_address, ClientProfile.city, ClientProfile.state, ClientProfile.zip, id])
};


ClientProfile.update = (ClientProfile, id) => {
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
  zip = $9,
  user_id = $10,
  WHERE id = $11
  RETURNING *
  `) [ClientProfile.age, ClientProfile.sex, ClientProfile.height, ClientProfile.weight, ClientProfile.income, ClientProfile.street_address, ClientProfile.city, ClientProfile.state, ClientProfile.zip, id]
};

ClientProfile.destroy = (id) => {
  return db.none(`
    DELETE FROM user_profiles
    WHERE id = $1
  `, [id]);
};


module.exports = ClientProfile;

