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
  console.log(filters);

   if (filters.height.length) {
    newArr.push(UserSearch.buildHeight(filters.height))
  }

  if (filters.age.length) {
    newArr.push(UserSearch.buildAge(filters.age))
  }
  console.log(newArr);
   //filter out empty string and join with And
  if (newArr.length > 1) {
    let filArr = newArr.filter(e => e !=='');
    return filArr.join(' AND ')
  } else {
    return filArr
  }

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
   const heightMap = [
     'user_profiles.height < 4',
     'user_profiles.height BETWEEN 4 AND 5',
     'user_profiles.height BETWEEN 5 AND 6',
     'user_profiles.height > 6'
   ];

   const vals = height.reduce((acc, val, indx)=>{
     if (val) acc.push(heightMap[indx])
     return acc
   },[])

   // const vals = height
   //   .filter(box => !!box)
   //   .map((box, idx) => heightMap[idx]);

  console.log(`vals: ${vals}`);
  return vals.join(' OR ');
}

module.exports = UserSearch;
