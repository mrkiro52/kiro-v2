#!/bin/sh
set -e

create_service_db() {
  svc="$1"
  password="$2"

  psql -v ON_ERROR_STOP=1 -v svc_password="$password" \
       --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<EOSQL
CREATE USER ${svc} WITH PASSWORD :'svc_password';
CREATE DATABASE ${svc} OWNER ${svc};
REVOKE ALL ON DATABASE ${svc} FROM PUBLIC;
EOSQL
}

create_service_db auth   "$AUTH_DB_PASSWORD"
create_service_db users  "$USERS_DB_PASSWORD"
create_service_db social "$SOCIAL_DB_PASSWORD"