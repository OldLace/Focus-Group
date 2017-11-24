const db = require('../db/config');

const UserSearch = {};

UserSearch.search = (filters) => {
  const whereClause = UserSearch.buildWhere(filters);
  console.log('whereClause: ', whereClause)
  return db.manyOrNone(`
    SELECT users.firstname, users.lastname, user_profiles.*
    FROM users
    JOIN user_profiles on user_profiles.user_id = users.id
    WHERE ${whereClause}
  `)
};

UserSearch.buildWhere = (filters) => {
  let newArr = [];
  if(filters.age.length) {
    newArr.push(UserSearch.buildString(filters.age, 'age'))
  }
  if(filters.height.length) {
    newArr.push(UserSearch.buildString(filters.height, 'height'))
  }
  if(filters.weight.length) {
    newArr.push(UserSearch.buildString(filters.weight, 'weight'))
  }
  if(filters.income.length) {
    newArr.push(UserSearch.buildString(filters.income, 'income'))
  }

  return newArr
    .filter((el) => {
      return el.length > 0
    })
    .join( ' AND ')
};

UserSearch.buildString = (arr, type) => {
 let compareArray
 let returnArray = []

 switch(type){
  case 'age':
    compareArray = ['user_profiles.age BETWEEN 10 AND 15','user_profiles.age BETWEEN 25 AND 34','user_profiles.age BETWEEN 35 AND 44','user_profiles.age > 44']
    break;
  case 'height':
    compareArray = ['user_profiles.height BETWEEN 18 AND 24', 'user_profiles.height BETWEEN 25 AND 34', 'user_profiles.height BETWEEN 35 AND 44','user_profiles.height > 44']
    break;
  case 'weight':
    compareArray = ['user_profiles.weight < 100', 'user_profiles.weight BETWEEN 101-150', 'user_profiles.weight BETWEEN 151-249', 'user_profiles.weight > 250']
    break;
  case 'income':
    compareArray = ['user_profiles.income < 35000', 'user_profiles.income BETWEEN 35001-50000', 'user_profiles.income BETWEEN 50001-100000','user_profiles.income > 100000']
    break
  default:
    throw new Error('Array type not found')
    break;
 }

  for(let i=0;i <arr.length;i++){
    if(arr[i] === true){
      returnArray.push(compareArray[i])
    }
  }
  console.log('returnArray: ', returnArray)
  return returnArray.join(' OR ')
}

module.exports = UserSearch;
