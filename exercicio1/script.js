let conta = 0
while (true){
    const pergunta = prompt("Deseja comer coxinha?(S/N)")
    if(pergunta.toUpperCase() === "S"){
        conta += 2.50
    } else if (pergunta.toUpperCase() === "N") {
        break;
    }else {
        alert(`Resposta invalida, responda com S ou N`)
    }
    }

    alert(`O valor total é de R$${conta.toFixed(2)} `)