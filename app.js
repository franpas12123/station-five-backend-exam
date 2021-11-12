const express = require('express');
const app = express();
const PORT = 8080;

const messageRouter = require('./src/routes/message.routes');

app.use(express.json());
app.use('/message', messageRouter);
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

module.exports = app;
