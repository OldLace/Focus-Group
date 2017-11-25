DROP TABLE groups;

CREATE TABLE IF NOT EXISTS groups (
  id SERIAL PRIMARY KEY,
  group_name VARCHAR(255),
  biz_id INT REFERENCES users(id),
  user_id INT REFERENCES users(id)
)
