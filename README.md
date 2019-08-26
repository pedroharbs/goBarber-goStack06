# goBarber
A simple app to manage, and perform beard and haircut appointments for a barber shop.

## Requirements

Database postgres

Install with docker

```shell
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d
postgres
```

## Configuration

```shell
## In /src/config/database.js 
replace the database settings with your own.
host: 'Your Address',
  port: 'Your Port',
  username: 'Your User',
  password: 'Your Address',
  database: 'Your Database',
```

## Dependencies

```shell
yarn install
```

## Migrations

```shell
npx sequelize db:migrate
```

## Test

```shell
yarn start 
```
