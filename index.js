const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

app.post('/message', (req, res) => {
  if (!req.body.conversation_id || !req.body.message) {
    res.status(418).send({ response: 'Invalid format!' });
  }

  const { conversation_id, message } = req.body;
  let response = {
    response_id: conversation_id,
    response: '',
  };

  if (message.includes('Hello') || message.includes('Hi'))
    response.response = 'Welcome to StationFive.';
  else if (message.includes('Goodbye') || message.includes('bye'))
    response.response = 'Thank you, see you around.';
  else response.response = 'Sorry, I don’t understand.';

  res.send(response);
});
