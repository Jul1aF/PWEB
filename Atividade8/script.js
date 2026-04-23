let maisVelho=0, maisNovo=1000, idade=0, sexo=0, opiniao=0, medIdade=0, mulheres=0, homens=0, outros=0, otimo=0,bom=0, regular=0, pessimo=0, totalopiniao;

for(let i=0;i<=45;i++){
    idade=parseInt(prompt("Digite a idade da pessoa"));
    if(idade<maisNovo){
        maisNovo=idade;
    }
    if(idade>maisVelho){
        maisVelho=idade;
    }
    medIdade += idade;

    sexo=prompt("Digite o sexo: \nF ou M ou Outros\n");
    if(sexo=="F"){
        mulheres+=1;
    } else if(sexo=="M"){
        homens+=1;
    } else {
        outros+=1;
    }

    opiniao =prompt("Digite sua opinião sobre o filme:" );
    if(opiniao == 1){
        pessimo +=1;
    } else if(opiniao == 2){
        regular += 1;
    } else if(opiniao == 3){
        bom += 1;
    } else if(opiniao==4){
        otimo+= 1;
    }

    totalopiniao = pessimo+regular+bom+otimo;
    
}

alert("Media de idade das pessoas"+ (medIdade/45).toFixed(2) + "\nIdade da pessoa mais velha: " + 
    maisVelho + "\nIdade da pessoa mais nova: " + maisNovo + "\nQuantidade de pessoas que responderam péssimo: " 
    + pessimo + "\nPorcentagem de pessoas que responderam ótimo e bom: " + ((bom+otimo)/totalopiniao*100).toFixed(2) + "\nMulheres: " + mulheres + 
    "\nHomens: " + homens + "\nOutros: " + outros);

