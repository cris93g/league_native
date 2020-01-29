require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const routes = require('./Routes/routes');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(json());

routes(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
