const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

app.use(cors());

const accessTokenSecret = 'randomaccesstoken';
const refreshTokenSecret = 'randomrefreshtoken';

const users = [
  {
    email: 'john@gmail.com',
    password: 'password123admin',
    role: 'admin'
  }
]

const refreshTokens = [];

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  // read username and password from request body
  const { email, password } = req.body;

  // filter user from the users array by username and password
  const user = users.find(u => { return u.email === email && u.password === password });

  if (!user) {
    res.status(400).send('Email or password incorrect');
  }
  // generate an access token
  const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
  const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

  refreshTokens.push(refreshToken);

  res.json({
    user: user,
    accessToken,
    refreshToken
  });
});

app.listen(5000, () => {
    console.log('Servre started on port 5000');
});






