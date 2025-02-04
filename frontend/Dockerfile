FROM node:20

WORKDIR /app

COPY . /app/frontend

WORKDIR /app/frontend

RUN npm install pnpm -g
RUN pnpm install
RUN pnpm run build

CMD [ "pnpm", "run", "start" ]