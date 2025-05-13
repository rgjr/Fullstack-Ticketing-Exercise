# Full Stack Ticketing Exercise

## Installation

### /server

Use npm to install

```bash
npm install
```

Run Docker PostgreSQL

```bash
docker compose up -d
```

Seed Prisma data inside `/server`

```bash
npx prisma db seed
```

## /client

Use npm to install

```bash
npm install
```

Run project

```bash
npm run dev
```

## Usage

This project comes installed with [Swagger](https://swagger.io/)

- visit [http://localhost:3000/api/](http://localhost:3000/api/) after running to view endpoints

## License

[MIT](https://choosealicense.com/licenses/mit/)
