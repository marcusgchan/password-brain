# Template

A fun little template

## Technologies Used

- Frontend
  - React (Typescript)
  - Material UI
  - React Query
- Backend
  - Nodejs (Typescript)
  - Express
  - Prisma
- Database
  - Postgress
- Other
  - Vite
  - Docker

## How to run

Install docker and docker compose

Clone the repo and add a .env file in the root directory with the following environment variables:

```.env
POSTGRESS_PASSWORD=<your_password>
```

Add another .env file in the prisma directory with the following environment variable:

```.env
DATABASE_URL=<your_database_url>
```

Run in the console:

```bash
docker-compose up
```

Update database with latest migrations. Go into api docker container and run:

```bash
npx prisma migrate dev
```

Pray everything works!
