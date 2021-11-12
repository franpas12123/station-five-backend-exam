const postMessage = (req, res) => {
  if (!req.body.conversation_id || !req.body.message) {
    res.status(418).send({ response: 'Invalid format!' });
  }

  const { conversation_id, message } = req.body;
  let response = {
    response_id: conversation_id,
    response: '',
  };

  const arr = message.split(/([^a-zA-Z0-9])/g);
  if (arr.includes('Hello') || arr.includes('Hi'))
    response.response = 'Welcome to StationFive.';
  else if (arr.includes('Goodbye') || arr.includes('bye'))
    response.response = 'Thank you, see you around.';
  else response.response = 'Sorry, I don’t understand.';

  res.send(response);
};

module.exports = {
  postMessage,
};
