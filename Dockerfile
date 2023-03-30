FROM node:18.13
WORKDIR /hvex-omni
COPY . .
RUN npm install
EXPOSE 5173
ENTRYPOINT npm run dev -- --host=0.0.0.0 --port=5173
