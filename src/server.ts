import 'reflect-metadata'
import express from 'express';
import './database';

const app = express();


// http://localhost:3000/users
app.get("/users", (request, response) => {
    return response.json({ message: "Hello Viadooooo!" })
})

// 1 param => Rota(Recurso API)
// 2 param => request, response

app.post("/", (request, response) => {
    // Recebeu os dados para salvar

    return response.json({ message: "recebeu a mensagem Viadooooo!" })
})

app.listen(3000, () => console.log("Server is running!"));