
# Manager Reminder

Aplicação web responsável pela gestão de lembretes, desenvolvida em React (frontend), utilizando o [Create React App](https://create-react-app.dev/), e Node.js (backend), utilizando [Express](https://expressjs.com/pt-br/).

# Premissas

Com base nos objetivos e especificações técnicas estabelecidas no teste prático, assumi a necessidade de criar uma aplicação web que priorizasse tanto a experiência do usuário quanto a qualidade do código. Por isso, foquei na organização do código, separando os arquivos em pastas de acordo com suas respectivas responsabilidades.

Para proporcionar uma melhor experiência ao usuário, preocupei-me em implementar validações claras e objetivas, mensagens de erro e sucesso bem descritas, e a confirmação dupla na exclusão de lembretes para evitar a remoção acidental.

# Decisões de Projeto

Em ambas as arquiteturas, busquei oferecer uma clara separação de responsabilidades, facilitando a manutenção e escalabilidade do sistema. Isso promove a reutilização de código e a modularidade, permitindo que diferentes partes da aplicação sejam desenvolvidas, testadas e mantidas de forma independente.

No backend, utilizei a estrutura **Arquitetura em Camadas (Layered Architecture)**, e no frontend, optei pela **Arquitetura Modular ou Componentizada**.

# Instruções para Executar o Sistema

Para baixar o repositório em sua máquina, utilize o comando:

> **git clone `https://github.com/ArthurLelis/ManagerReminder.git`**

## Configuração Inicial

1.  Instale o [Node.js](https://nodejs.org/pt).
2.  Reinicie o seu computador.

### Executando o Backend

Para iniciar a execução do backend:

1.  Acesse a pasta **api**.
2.  Execute: `npm install`.
3.  Execute: `npm start`.

Para executar os testes unitários, siga os passos 1 e 2 acima e, em seguida, execute: `npm test`.

### Executando o Frontend

Para iniciar a execução do frontend:

1.  Acesse a pasta **fe**.
2.  Execute: `npm install`.
3.  Execute: `npm start`.

Para executar os testes unitários, siga os passos 1 e 2 acima e, em seguida, execute: `npm test`.
