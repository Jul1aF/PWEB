let jogador = (prompt("Escolha sua jogada\n1- Pedra\n2- Papel\n3- Tesoura\n"));

let maquina = Math.random().toFixed(2);

/*0.33 = pedra
  0.34 - 0.66 = papel
  0.65 - 0.99 = tesoura*/

  if(maquina <= 0.33){
    alert("O computador escolheu pedra");
  } else if(maquina <= 0.66) {
    alert("O computador escolheu papel")
  } else {
    alert("O computador escolheu tesoura");
  }

  //pedra
  if(jogador == 1){
    if(maquina <= 0.33){
    alert("Empate");
    } else if(maquina <= 0.66) {
    alert("Papel cobre pedra. O computador ganhou")
    } else {
    alert("Pedra quebra tesoura. O jogador ganhou");
    }
    }

    //jogador escolhe papel
  if(jogador == 2){
    if(maquina <= 0.33){ //maquina escolheu pedra
    alert("Papel cobre pedra. O jogador ganhou.");
  } else if(maquina <= 0.66) { //papel
    alert("Empate")
  } else { //tesoura
    alert("Tesoura corta papel. O computador ganhou");
  }
}

  //jogador escolhe tesoura 
  if(jogador == 3){
    if(maquina <= 0.33){ //maquina escolheu pedra
    alert("Pedra quebra tesoura. O computador ganhou.");
  } else if(maquina <= 0.66) { //papel
    alert("Tesoura corta papel. O jogador ganhou.")
  } else { //tesoura
    alert("Empate");
  }

  

  }

