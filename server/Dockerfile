FROM node:16.15

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

ENV PORT=3001

EXPOSE $PORT

CMD ["npm", "run", "dev"]