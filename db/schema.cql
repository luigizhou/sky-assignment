CREATE KEYSPACE IF NOT EXISTS ks1
  WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

CREATE TABLE IF NOT EXISTS ks1.event(
  time text PRIMARY KEY
);