DROP SCHEMA example CASCADE;
CREATE SCHEMA example;
create role example_role login password 'xyz';

create type example.jwt_token as (
  role text,
  id integer
);

CREATE TABLE example.user (
    id serial PRIMARY KEY,
    nickname text NOT NULL CHECK (char_length(nickname) < 32)
);

grant usage on schema example to example_role;

grant select, insert, update, delete on table example.user to example_role;