# Safe Apps Backend

Este é o backend do projeto Safe Apps, que utiliza Node.js, Express, MongoDB, e TypeScript. Ele permite o envio e armazenamento de respostas de quizzes, bem como a conexão e manipulação de dados através de um banco de dados MongoDB.

## Estrutura do Projeto

| Arquivo               | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| **index.ts**           | Arquivo principal do servidor, configurando o Express, CORS e a conexão com MongoDB |
| **package.json**       | Definições de dependências e scripts do projeto                          |
| **.env**               | Variáveis de ambiente, incluindo a URI de conexão ao MongoDB             |
| **quiz.routes.ts**     | Definição de rotas para o quiz, com uma rota POST para enviar respostas  |
| **quiz.controller.ts** | Controlador do quiz, responsável por receber, validar e armazenar as respostas do estudante |
| **student.model.ts**   | Modelo Mongoose que define o esquema de respostas e estudantes no MongoDB |
| **connection.ts**      | Arquivo de conexão com o MongoDB, estabelecendo a comunicação com a base de dados |
| **tsconfig.json**      | Configurações do TypeScript, definindo o alvo da compilação e outros detalhes |

## Configuração e Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/Andrengr0/safe-apps-back.git
```

### 1. Instale as dependências
```bash
npm install
```

### 3. Configuração do MongoDB
Crie um arquivo .env na raiz do projeto e defina a variável de ambiente com a URI de conexão ao MongoDB Atlas:

```bash
MONGODB_URI='mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<database>?retryWrites=true&w=majority'
```

4. Execute o servidor
Para iniciar o servidor em modo de desenvolvimento, utilize o comando:

```bash
npm run dev
```
O servidor rodará na porta 3333.

## Endpoints
1. POST /api/submit-answer
Este endpoint recebe as respostas de um quiz e salva no banco de dados.

Corpo da Requisição (JSON):
```bash
{
  "name": "Nome do Estudante",
  "quizId": "ID do Quiz",
  "answers": [
    { "questionId": "ID da Pergunta", "correct": true }
  ]
}
```
Resposta de Sucesso (200):

## Tecnologias Utilizadas
* Node.js
* Express
* MongoDB (Mongoose)
* TypeScript
* dotenv
* cors
* Scripts Disponíveis
* npm run dev: Executa o servidor em modo de desenvolvimento utilizando o nodemon.
* npm start: Inicia o servidor com ts-node.
* npm run build: Compila o projeto TypeScript para JavaScript.