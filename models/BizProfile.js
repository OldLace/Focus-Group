const db = require('../db/config');

const BizProfile = {};

BizProfile.findAll = () => {
  return db.query('SELECT * FROM biz_profiles');
};

BizProfile.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM biz_profiles
    WHERE biz_id = $1
 `, [id]);
};

BizProfile.create = (bizProfile, bizId) => {
  return db.one(`
    INSERT INTO biz_profiles
    (bizname, street_address, city, state, zip, biz_description, biz_url, biz_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `, [bizProfile.bizname, bizProfile.street_address, bizProfile.city, bizProfile.state, bizProfile.zip, bizProfile.biz_description, bizProfile.biz_url, bizId])
};


BizProfile.update = (bizProfile, id) => {
  return db.one(`
  UPDATE biz_profiles SET
  bizname = $1,
  street_address = $2,
  city = $3,
  state = $4,
  zip = $5,
  biz_description = $6,
  biz_url = $7,
  WHERE id = $8
  RETURNING *
  `,  [bizProfile.bizname, bizProfile.street_address, bizprofile.city, bizprofile.state, bizprofile.zip, bizprofile.biz_description, bizprofile.biz_url, id]);
};

BizProfile.destroy = (id) => {
  return db.none(`
    DELETE FROM biz_profiles
    WHERE id = $1
  `, [id]);
};


module.exports = BizProfile;
