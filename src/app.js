require('dotenv').config();
const express = require('express');
const routersApp = require('./router');
const {models, conection } = require('./models');
const app = express();

const port = process.env.PORT || 3000;  

app.use(express.json());

app.use('/api', routersApp);

const eraseDatabaseOnSync = true;

conection.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen({ port: port }, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});