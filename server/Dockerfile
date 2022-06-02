FROM node:16.15

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npx prisma generate

COPY . .

ENV PORT=3001

EXPOSE $PORT

CMD ["npm", "run", "dev"]