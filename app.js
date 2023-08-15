const express = require('express');
const app = express();
const port = 3000;

// Получение поста по его ID
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  
  getPost(id)
    .then((post) => res.json(post))
    .catch((error) => res.status(500).json(error));
});

// Обновление поста в базе данных
app.put('/posts/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  
  updatePost(id, data)
    .then((updatedPost) => res.json(updatedPost))
    .catch((error) => res.status(500).json(error));
});

// Лайк поста
app.post('/posts/:id/like', (req, res) => {
  const id = req.params.id;
  
  likePost(id)
    .then((updatedPost) => res.json(updatedPost))
    .catch((error) => res.status(500).json(error));
});

// Дизлайк поста
app.post('/posts/:id/dislike', (req, res) => {
  const id = req.params.id;
  
  dislikePost(id)
    .then((updatedPost) => res.json(updatedPost))
    .catch((error) => res.status(500).json(error));
});

// Комментирование поста
app.post('/posts/:id/comment', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  
  addComment(id, comment)
    .then((updatedPost) => res.json(updatedPost))
    .catch((error) => res.status(500).json(error));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});