[ client ] < HTTP > [ API Knex ] < DB Network Protocol > [ Data Store ]

Knex: translates from JS to SQL and from rows of DB data to JS arrays.

DB Driver: knows how to use the database protocol over the network. Depends on the type of database used.

MongoDB -> mongo protocol
PostgreSQL -> postgresql://

## Mantras

- every table MUST have a Primary Key
- every change to the db schema requires a new migration

## Expectations

- NOT about managing databases
- about using databases from an API
- about taking requirements and designing a data model (the db schema)

## Database Migrations

- a tool to evolve your database over time
- can create database objects
- can modify database objects
- live together with your application code, pushed to source control (Git)
- written in JS.