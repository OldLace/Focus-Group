CREATE TABLE IF NOT EXISTS groups (
  id SERIAL PRIMARY KEY,
  biz_id integer references biz_profiles(id) NOT NULL,

)