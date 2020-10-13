import express, { response } from 'express';

const app = express();

app.use(express.json());

// Rota = conjunto
// Recurso = usuário

// Método HTTP = GET, POST, PUT, DELETE
// Parâmetros 

// GET = Buscar informação
// POST = Criar

// PUT = Editar
// DELETE = Deletar

// Query Params: http://localhost:3333/users?search=joao
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/ 

app.get('/users', (request, response) => {
    console.log(request.query)
    console.log(request.params)
    console.log(request.body)
    return response.json({ message: 'Hello World'});
})

app.listen(3333);