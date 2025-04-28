const campeonatos = [
    "IEM Dallas 2025",
    "BLAST Premier Spring Final 2025",
    "ESL Challenger Katowice 2025"
];

const time = [
    "KSCERATO",
    "Yekindar",
    "yuurih",
    "Molodoy",
    "FalleN"
];

const curiosidades = [
    "O FalleN é conhecido como 'O Professor' no cenário internacional!",
    "A FURIA foi o primeiro time brasileiro a alcançar o top 3 do ranking HLTV sem jogadores da geração LG/SK!",
    "KSCERATO foi considerado um dos jogadores mais consistentes de 2024.",
    "A FURIA é famosa pelo seu estilo de jogo extremamente agressivo!",
    "FalleN já ganhou dois Majors em sua carreira (com Luminosity e SK Gaming)."
];

function sendOption(option) {
    let message = '';

    switch(option) {
        case 'proximos_campeonatos':
            message = "Próximos campeonatos da FURIA:\n- " + campeonatos.join("\n- ");
            addMessage('Você', document.querySelector(`button[onclick="sendOption('${option}')"]`).innerText);
            addMessage('FURIA Bot', message);
            break;

        case 'time':
            message = "Elenco atual da FURIA:\n- " + time.join("\n- ");
            addMessage('Você', document.querySelector(`button[onclick="sendOption('${option}')"]`).innerText);
            addMessage('FURIA Bot', message);
            break;

        case 'curiosidade':
            let dia = new Date().getDate();
            let curiosidadeIndex = dia % curiosidades.length;
            message = curiosidades[curiosidadeIndex];
            addMessage('Você', document.querySelector(`button[onclick="sendOption('${option}')"]`).innerText);
            addMessage('FURIA Bot', message);
            break;

        case 'jogos_mes':
            fetch('http://localhost:3000/resultados')
                .then(response => response.json())
                .then(resultados => {
                    let message = "Resultados dos jogos:\n\n";
                    resultados.forEach(jogo => {
                        message += `🏆 ${jogo.campeonato}\n`;
                        message += `🗓️ ${jogo.date}\n`;
                        message += `🎯 ${jogo.team1} vs ${jogo.team2}\n`;
                        message += `📍 ${jogo.fase}\n`;
                        message += `✅ Resultado: ${jogo.resultado.vencedor} venceu por ${jogo.resultado.placar}\n\n`;
                    });
                    addMessage('Você', document.querySelector(`button[onclick="sendOption('${option}')"]`).innerText);
                    addMessage('FURIA Bot', message.trim());
                })
                .catch(err => {
                    const message = "Erro ao obter resultados dos jogos. Tente novamente.";
                    addMessage('Você', document.querySelector(`button[onclick="sendOption('${option}')"]`).innerText);
                    addMessage('FURIA Bot', message);
                });
            break;

        case 'proximos_jogos':
            fetch('http://localhost:3000/proximos-jogos')
                .then(response => response.json())
                .then(proximos => {
                    let message = "Próximos jogos da FURIA:\n\n";
                    proximos.forEach(jogo => {
                        message += `🏆 ${jogo.campeonato}\n`;
                        message += `🗓️ ${jogo.date}\n`;
                        message += `🎯 ${jogo.team1} vs ${jogo.team2}\n`;
                        message += `📍 ${jogo.fase}\n\n`;
                    });
                    addMessage('Você', document.querySelector(`button[onclick="sendOption('${option}')"]`).innerText);
                    addMessage('FURIA Bot', message.trim());
                })
                .catch(err => {
                    const message = "Erro ao obter próximos jogos. Tente novamente.";
                    addMessage('Você', document.querySelector(`button[onclick="sendOption('${option}')"]`).innerText);
                    addMessage('FURIA Bot', message);
                });
            break;
    }
}

function addMessage(sender, text) {
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text.replace(/\n/g, "<br>")}`;
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight;
}
