FROM node:lts

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN chmod +x wait-for-it.sh

RUN npx prisma generate

ENV PORT=3001

EXPOSE $PORT

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["./wait-for-it.sh db:5432 -s -t 60 -- npx prisma migrate dev && npm run dev" ]