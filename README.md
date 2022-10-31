## MC WS

## start mongo

after starting mongo server, go inside mc_wc_api/index.js and change the mongo connection url inside `main` function

```javascript
async function main() {
  await mongoose.connect('monmongodb://localhost:27017/mc_db');
}
```

## start backend

```bash
cd mc_ws_api
yarn
yarn start
```

## start front

```bash
cd mc_ws_front
yarn
yarn start
```

