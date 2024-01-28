const express = require('express');
require('dotenv').config()
const app = express()

const jwt = require('jsonwebtoken');
app.use(express.json())

const posts = [
  {
    username: "Bradley",
    title: "Post 1"
  },
  {
    username: "John",
    title: "Post 2"
  }
]

// declaring middleware function

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next()
  })
}

app.get('/', (req, res) => {
  res.status(200).send("root page");
})
app.get('/posts', authenticateToken, (req, res) => {
  const post = posts.find((post) => post.username === req.user.name)
  res.status(200).json(post);
})

app.post('/login', (req, res) => {
  const { username } = req.body;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.TOKEN_SECRET)
  res.json({ accessToken: accessToken })
})

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
