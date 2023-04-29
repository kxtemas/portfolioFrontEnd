const express = require('express');
const dotenv = require('dotenv');
const mg = require('mailgun-js');
const path = require ('path');



dotenv.config();

/**
 * Date: 02/12/22
 * @author Katie Munoz
 * @version 2.
 *
 */ 


//setting up api key that is generated by mailgun
const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//setting up build
app.get("*", (_, res) => res.sendFile("index.html", { root: "build" }));


//sends email  to the listed email
app.post('/api/email', (req, res) => {
  const { email, subject, message } = req.body;
  mailgun()
    .messages()
    .send(
      {
        "from": `${email}`,
        "to": 'Katie Munoz <kxtemas01@gmail.com>',
        "subject": `${subject}`,
        "html": `<p>${message}</p>`,
      },
      //error message
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          //if succcessful sends confirmation alert
          console.log(body);
          res.send({ message: 'Email sent successfully' });
        }
      }
    );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`serve at http://localhost:${port}`);
});