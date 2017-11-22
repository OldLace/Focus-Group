const db = require('../db/config');

const UserSearch = {};

UserSearch.search = (filters) => {
  const whereClause = UserSearch.buildWhere(filters);
  console.log('whereClause: ', whereClause)
  return db.manyOrNone(`
    SELECT users.username
    FROM users
    JOIN user_profiles on user_profiles.user_id = users.id
    WHERE ${whereClause}
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
  return newArr
};

UserSearch.buildAge = (age) => {
 const ageMap = ['user_profiles.age BETWEEN 10 AND 15','user_profiles.age BETWEEN 25 AND 34','user_profiles.age BETWEEN 35 AND 44','user_profiles.age > 44']
 let giveageMap = []
 for(let i=0;i<age.length;i++){
  if(age[i] === true){
    giveageMap.push(ageMap[i])
  }
 }
 console.log('giveageMap: ', giveageMap)
 return giveageMap.join(' OR ')
}

UserSearch.buildHeight = (height) => {
   const heightMap = {
     1: 'user_profiles.height BETWEEN 18 AND 24',
     2: 'user_profiles.height BETWEEN 25 AND 34',
     3: 'user_profiles.height BETWEEN 35 AND 44',
     4: 'user_profiles.height > 44'
   }
   return heightMap
}

module.exports = UserSearch;
