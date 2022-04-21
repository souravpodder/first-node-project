const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(' I have to buy a pant');
})

const users = [
  { id: 1, name: 'Subrata', email: 'subrata45@gmail.com', phone: '01945223544' },
  { id: 2, name: 'Sabbir', email: 'sabbir45@gmail.com', phone: '01945223544' },
  { id: 3, name: 'Pranta', email: 'Pranta45@gmail.com', phone: '01945223544' },
  { id: 4, name: 'Rabiul', email: 'Rabiul45@gmail.com', phone: '01945223544' },
  { id: 5, name: 'amit', email: 'amit45@gmail.com', phone: '01945223544' },
  { id: 6, name: 'badhan', email: 'badhan45@gmail.com', phone: '01945223544' },
  { id: 7, name: 'emon', email: 'emon45@gmail.com', phone: '01945223544' }

]

app.get('/users', (req, res) => {
  console.log('query', req.query);

  if (req.query.name) {
    const searchQuery = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(searchQuery));
    res.send(matched);
  } else {
    res.send(users);
  }

})

app.get('/user/:userId', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.userId);
  console.log(id);
  const user = users.find(u => u.id === id);
  res.send(user);
})

app.post('/user', (req, res) => {
  console.log('request body', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
})

app.get('/fruits/mango/fazli', (req, res) => {
  res.send('fazli tasted so good.');
})

app.listen(port, () => {
  console.log('listening to port', port);
})