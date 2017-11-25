const db = require('../db/config');

const Groups = {};

Groups.createGroup = (name, id) => {
  return db.one(`
    INSERT INTO groups
    (group_name, user_id, biz_id)
    VALUES($1,$2,$3)
    RETURNING *
  `,  [name, id, id])
}

Groups.addToGroup = (group) => {
  return db.one(`
    INSERT INTO groups
    (group_name, biz_id, user_id)
    VALUES ($1,$2,$3)
    RETURNING *
  `, [group.group_name, group.biz_id, group.user_id])
}

Groups.showAll = (id) => {
  return db.query(`
  SELECT * FROM groups
  WHERE biz_id = $1
  `,[id]);
}

module.exports = Groups;


// SELECT groups.*, users.*
// FROM groups
// JOIN users ON users.id = groups.user_id
// WHERE groups.biz_id = 1;
