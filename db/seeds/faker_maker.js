let fs = require('fs')
let faker = require ('faker')
let path = require('path')
let writeSource = path.join(__dirname, './db/seeds') + '/users.sql'

let count = 500;  //Change this to the number of user seeds you want.

let data = 'INSERT INTO users (firstname, lastname, username, email, password_digest) VALUES\n'
for(let i=0;i<count;i++){
  data += `('${faker.name.firstName().replace(/[']/g,'')}', '${faker.name.lastName().replace(/[']/g,'')}', '${faker.internet.userName().replace(/[']/g,'')}', '${faker.internet.email().replace(/[']/g,'')}', 'abc')${i < (count-1) ? ',' : ''}\n`
}
fs.writeFileSync(writeSource, data, {"encoding" : 'utf8'});
console.log('finished users seed')

let writeSource1 = path.join(__dirname, './db/seeds') + '/user_profiles.sql'
let data1 = 'INSERT INTO user_profiles (age, sex, height, weight, income, street_address, city, state, zip, user_id) VALUES\n'
for(let i=0;i<count;i++){
  data1 += `(${Math.floor(Math.random() * (99-10)) + 10}, '${Math.random() >= 0.5 ? 'male' : 'female'}', ${Math.floor(Math.random() * (90 - 55)) + 55}, ${Math.floor(Math.random() * (450-70)) + 70}, ${Math.floor(Math.random() * (400000-22000)) + 70}, '${faker.address.streetAddress().replace(/[']/g,'')}', '${faker.address.city().replace(/[']/g,'')}', '${faker.address.stateAbbr()}', ${faker.address.zipCode().replace(/[-].*/,'')}, ${i+1})${i < count ? ',' : ''}\n`
}
fs.writeFileSync(writeSource1, data1, {"encoding" : 'utf8'});

console.log('finished user_profiles seed')

