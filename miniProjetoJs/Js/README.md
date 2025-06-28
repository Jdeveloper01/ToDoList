# Aplicativo de Gerenciamento de Tarefas

Um aplicativo simples de gerenciamento de tarefas construído com HTML, CSS e JavaScript que usa JSON Server como backend.

## Funcionalidades

- ✅ Criar novas tarefas com título e descrição
- ✅ Visualizar todas as tarefas em um layout responsivo em grade
- ✅ Excluir tarefas com confirmação
- ✅ Pesquisar tarefas por título ou descrição
- ✅ Design responsivo para dispositivos móveis
- ✅ Tratamento de erros e feedback ao usuário

## Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o JSON Server (backend):**
   ```bash
   npm run api
   ```
   Isso iniciará o servidor em `http://localhost:3000`

3. **Abrir a aplicação:**
   - Abra `index.html` no seu navegador
   - Ou use um servidor local como Live Server no VS Code

## O Que Foi Corrigido

### Problemas no JavaScript:
- ✅ Corrigido erro de URL: `http//localhost:3000` → `http://localhost:3000`
- ✅ Corrigido erro de JSON: `JSON.stringfy` → `JSON.stringify`
- ✅ Adicionado tratamento de erro adequado para todas as requisições fetch
- ✅ Corrigido envio de formulário (removido tratamento duplo de eventos)
- ✅ Adicionado diálogo de confirmação para exclusão de tarefas
- ✅ Implementada funcionalidade de pesquisa
- ✅ Adicionado tratamento para estado vazio
- ✅ Melhorada organização do código com referências adequadas aos elementos DOM

### Problemas no HTML:
- ✅ Corrigido erro de digitação no placeholder: "pesquisasr" → "Pesquisar"
- ✅ Adicionado espaçamento adequado nos atributos onclick
- ✅ Corrigida estrutura do formulário e removidos manipuladores de eventos redundantes
- ✅ Atualizado título de "Projeto Jsn" → "Projeto Js"

### Melhorias no CSS:
- ✅ Adicionados estilos para estados vazios e de erro
- ✅ Melhorado estilo do ícone de lixeira (usando Font Awesome em vez de box-icon)
- ✅ Adicionado design responsivo para dispositivos móveis
- ✅ Melhorado feedback visual para interações

## Endpoints da API

O aplicativo usa estes endpoints do JSON Server:
- `GET /tarefas` - Obter todas as tarefas
- `POST /tarefas` - Criar uma nova tarefa
- `DELETE /tarefas/:id` - Excluir uma tarefa por ID

## Estrutura do Projeto

```
Js/
├── index.html          # Arquivo HTML principal
├── index.js           # Funcionalidade JavaScript
├── style/
│   └── style.css      # Estilos
├── api.json           # Banco de dados do JSON Server
├── package.json       # Dependências e scripts
└── README.md          # Este arquivo
```

## Tecnologias Utilizadas

- HTML5
- CSS3 (com design responsivo)
- JavaScript puro (ES6+)
- JSON Server (para API simulada)
- Font Awesome (para ícones) 