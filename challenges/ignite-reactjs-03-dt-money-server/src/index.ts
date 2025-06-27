// const http = require('http');

// const transactions = [
//   {
//     "id": 1,
//     "description": "Desenvolvimento de site",
//     "type": "income",
//     "category": "Venda",
//     "price": 14000,
//     "createdAt": "2022-07-29T19:36:44.505Z"
//   },
//   {
//     "id": 2,
//     "description": "Hambúrguer",
//     "type": "outcome",
//     "category": "Alimentação",
//     "price": 60,
//     "createdAt": "2022-07-29T19:30:44.505Z"
//   },
//   {
//     "id": 3,
//     "description": "Ignite Rocketseat",
//     "type": "outcome",
//     "category": "Educação",
//     "price": 1980,
//     "createdAt": "2022-07-29T19:24:44.505Z"
//   },
//   {
//     "description": "Desenvolvimento de app",
//     "price": 10000,
//     "category": "Venda",
//     "type": "income",
//     "createdAt": "2022-07-30T13:26:57.560Z",
//     "id": 4
//   },
//   {
//     "description": "Pastel",
//     "price": 5,
//     "category": "Alimentação",
//     "type": "outcome",
//     "createdAt": "2022-07-30T13:30:57.560Z",
//     "id": 5
//   },
//   {
//     "description": "Iogurte de Banana",
//     "price": 4,
//     "category": "Alimentação",
//     "type": "outcome",
//     "createdAt": "2022-07-30T13:38:57.560Z",
//     "id": 6
//   },
// ];

// const server = http.createServer((req, res) => {
//   if (req.url === '/transactions' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ transactions }));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// const PORT = 3333;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const transactions = [
  {
    "id": 1,
    "description": "Desenvolvimento de site",
    "type": "income",
    "category": "Venda",
    "price": 14000,
    "createdAt": "2022-07-29T19:36:44.505Z"
  },
  {
    "id": 2,
    "description": "Hambúrguer",
    "type": "outcome",
    "category": "Alimentação",
    "price": 60,
    "createdAt": "2022-07-29T19:30:44.505Z"
  },
  {
    "id": 3,
    "description": "Ignite Rocketseat",
    "type": "outcome",
    "category": "Educação",
    "price": 1980,
    "createdAt": "2022-07-29T19:24:44.505Z"
  },
  {
    "description": "Desenvolvimento de app",
    "price": 10000,
    "category": "Venda",
    "type": "income",
    "createdAt": "2022-07-30T13:26:57.560Z",
    "id": 4
  },
  {
    "description": "Pastel",
    "price": 5,
    "category": "Alimentação",
    "type": "outcome",
    "createdAt": "2022-07-30T13:30:57.560Z",
    "id": 5
  },
  {
    "description": "Iogurte de Banana",
    "price": 4,
    "category": "Alimentação",
    "type": "outcome",
    "createdAt": "2022-07-30T13:38:57.560Z",
    "id": 6
  },
];

app.get('/transactions', (req, res) => {
  const query = req.query.q; // Obtém o parâmetro de consulta 'q'

  if (query) {
    // Filtra transações com base na descrição
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(query.toString().toLowerCase())
    );
    res.json(filteredTransactions);
  } else {
    res.json(transactions);
  }
});

app.post('/transactions', (req, res) => {
  console.log(req.body);
  transactions.push(req.body);
  res.json(req.body);
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
