const db = require('../db/config');

const UserSearch = {};

UserSearch.search = (filters) => {
  const whereClause = UserSearch.buildWhere(filters);

  return db.manyOrNone(`
    SELECT users.username
    FROM users
    JOIN user_profiles on user_profiles.user_id = users.id
    ${whereClause}
  `)
};


UserSearch.buildWhere = (filters) => {
  let newArr = [];

  // if (filters.height.length) {
  //   newArr.push(UserSearch.buildHeight(filters.height))
  // }

  if (filters.age.length) {
    newArr.push(UserSearch.buildAge(filters.age))
  }

};

UserSearch.buildAge = (age) => {
 const ageMap = {
    1: 'user_profiles.age BETWEEN 18 AND 24',
    2: 'user_profiles.age BETWEEN 25 AND 34',
    3: 'user_profiles.age BETWEEN 35 AND 44',
    4: 'user_profiles.age > 44'
 }

UserSearch.buildHeight = (height) => {
   const heightMap = {
     1: 'user_profiles.height BETWEEN 18 AND 24',
     2: 'user_profiles.height BETWEEN 25 AND 34',
     3: 'user_profiles.height BETWEEN 35 AND 44',
     4: 'user_profiles.height > 44'
   }
}






};