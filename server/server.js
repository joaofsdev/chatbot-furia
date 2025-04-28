const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/resultados', (req, res) => {
  const resultados = [
    {
      team1: 'FURIA',
      team2: 'The Mongolz',
      date: '09/04/2025 - 10:00',
      campeonato: 'PGL Bucharest 2025',
      fase: 'Fase de Grupos',
      resultado: {
        vencedor: 'The Mongolz',
        placar: '2-0',
      },
    },
    {
      team1: 'FURIA',
      team2: 'Virtus.pro',
      date: '08/04/2025 - 10:00',
      campeonato: 'PGL Bucharest 2025',
      fase: 'Fase de Grupos',
      resultado: {
        vencedor: 'Virtus.pro',
        placar: '2-0',
      },
    },
  ];

  res.json(resultados);
});

app.get('/proximos-jogos', (req, res) => {
  const proximosJogos = [
    {
      team1: 'FURIA',
      team2: 'G2 Esports',
      date: '15/05/2025 - 14:00',
      campeonato: 'IEM Dallas 2025',
      fase: 'Fase de Grupos',
    },
    {
      team1: 'FURIA',
      team2: 'NAVI',
      date: '16/05/2025 - 17:00',
      campeonato: 'IEM Dallas 2025',
      fase: 'Fase de Grupos',
    },
  ];

  res.json(proximosJogos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
