# Password Brain

A fun little password manager side project to learn docker, docker-compose, prisma, typescript, etc

## Technologies Used

- Frontend
  - Vite
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

Pray it works
