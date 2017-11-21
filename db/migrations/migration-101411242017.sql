CREATE TABLE IF NOT EXISTS groups (
  id SERIAL PRIMARY KEY,
  biz_id integer references biz_profiles(id) UNIQUE NOT NULL,
  -- users text references user_id,
  campaign text,
  JOIN user_id ON  biz_profiles.group
);
