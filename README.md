# 📣 Challenge #1 - Experiência Conversacional FURIA

## 🔥 Sobre o Projeto

Este projeto é uma interface de **chatbot web** criada para os fãs da FURIA, focado no time de **CS:GO/CS2**.  
A proposta foi criar uma experiência simples e funcional, onde o usuário pode interagir com um assistente e receber informações rápidas e relevantes sobre:
- Próximos campeonatos
- Elenco atual
- Curiosidades sobre o time
- Resultados dos últimos jogos
- Próximos jogos agendados

Este projeto foi desenvolvido como parte do **Challenge #1 - Experiência Conversacional FURIA** para a seleção de estágio.

---

## 🚀 Tecnologias Utilizadas

- **HTML**: estruturação da interface da página.
- **CSS com TailwindCSS** (via CDN): estilização rápida e moderna com design responsivo.
- **JavaScript (Puro)**: lógica de interação do chat (envio de mensagens, chamadas ao servidor, exibição dinâmica).
- **Node.js com Express**: criação de uma API simples que simula os dados dos jogos e resultados.

---

## 🛠️ Como Foi Usado e Por Quê

- **HTML + TailwindCSS**:  
  Utilizado para criar uma interface simples, agradável e rápida de montar. Tailwind foi escolhido por sua praticidade e estética moderna.
  
- **JavaScript**:  
  Foi usado JavaScript puro (sem frameworks) para manter o projeto leve e fácil de entender, focando apenas no que era necessário: manipular o DOM e fazer requisições HTTP.

- **Node.js + Express**:  
  Utilizados para simular um backend básico que fornece informações de jogos e resultados. Isso foi necessário para criar uma experiência realista de comunicação entre front-end e servidor.

---

## 📋 Importante

> **Os dados de campeonatos, resultados e jogos foram pré-definidos e fictícios**.  
> Não foi possível integrar uma API pública oficial da FURIA ou de CS2 no momento, por isso, os resultados e eventos são gerados manualmente para simular uma interação real.  
> Em uma aplicação futura, seria possível integrar com APIs esportivas ou redes sociais para dados dinâmicos em tempo real.

---

## 🎮 Funcionalidades do Chatbot

- **Próximos Campeonatos**: lista dos próximos torneios em que a FURIA participará.
- **Time Atual**: mostra o elenco atual da FURIA.
- **Curiosidades**: uma curiosidade diferente a cada dia do mês.
- **Resultados**: exibe resultados de jogos passados.
- **Próximos Jogos**: informa datas e adversários dos próximos confrontos.

---

## 🖼️ Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaofsdev/chatbot-furia.git
   cd chatbot-furia
   ```

2. Instale as dependências para o servidor:
   ```bash
   npm install express cors
   ```

3. Inicie o servidor:
   ```bash
   node server/server.js
   ```

4. Abra o arquivo `index.html` no navegador.

---

## 📂 Estrutura do Projeto

```
chatbot-furia/
├── public/
│   ├── index.html
│   └── script.js
├── server/
│   ├── server.js (Node + Express)
├── package.json
└──  README.md
```

---

## 💬 Considerações Finais

Este projeto foi criado pensando em como um fã gostaria de se sentir ao interagir com a FURIA:  
Informações rápidas, visual atrativo, e uma experiência fluida.  
Tenho plena convicção que essa ideia poderia ser expandida com:
- Atualização dinâmica via APIs.
- Integração com redes sociais.
- Sistema de notificações para jogos em tempo real.

---

# 🖤 GO FURIA!

