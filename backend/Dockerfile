FROM node:20

WORKDIR /app

COPY . /app/backend

WORKDIR /app/backend

RUN npm install pnpm -g
RUN pnpm install
RUN pnpm run build

EXPOSE 3333

CMD [ "pnpm", "run", "prod" ]