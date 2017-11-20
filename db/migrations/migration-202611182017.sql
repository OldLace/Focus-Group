CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
  company BOOL
);

CREATE TABLE IF NOT EXISTS user_profiles (
  id SERIAL PRIMARY KEY,
  age INT,
  sex VARCHAR(255),
  height INT,
  weight INT,
  income INT,
  street_address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip INT,
  user_id integer references users(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS biz_profiles (
  id SERIAL PRIMARY KEY,
  bizname VARCHAR(255),
  street_address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip INT,
  biz_description TEXT,
  biz_url TEXT
 );

 CREATE TABLE IF NOT EXISTS campaigns (
  id SERIAL PRIMARY KEY,
  biz_id integer references biz_profiles(id) NOT NULL,
  c_name TEXT
 );


CREATE TABLE IF NOT EXISTS campaigns_users (
    id SERIAL PRIMARY KEY,
    users_id integer references users(id) NOT NULL,
    campaigns_id integer references campaigns(id) NOT NULL
);
