const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const dotenv = require('dotenv');
const mg = require('mailgun-js');




dotenv.config();

/**
 * Date: 02/12/22
 * @author Katie Munoz
 * @version 2.
 *
 */ 
const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });




app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res)
{
 	return res.send('pong');
});

app.get('/*', function (req, res)
{
  	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function ()
{
	 console.info('React Server App listening on port ' + port);
});

app.post('/api/email', (req, res) => {
  const { email, subject, message } = req.body;
  mailgun()
    .messages()
    .send(
      {
        "from": `${email}`,
        "to": 'Katie Munoz <kxtemas@gmail.com>',
        "subject": `${subject}`,
        "html": `<p>${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          console.log(body);
          res.send({ message: 'Email sent successfully' });
        }
      }
    );
});


app.listen(port, () => {
  console.info(`serve at http://localhost:${port}`);
});
