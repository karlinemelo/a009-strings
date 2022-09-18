//Crie a const para a frase aqui
/*A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/
//a)
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres:`;
//b)
let troca = frase.replace("verde", "rosa").replace("azul", "laranja");

//c)Verifique se a nova string inclui **verde**, e se inclui **laranja**.

console.log(
  `A nova frase possui a palavra \"verde"\: ${troca.includes(
    "verde" // vai imprimir um valor true ou false.
  )}\nA nova frase possui a palavra \"laranja\": ${troca.includes("laranja")}`
);
//Extra
const extra =
  "Jorge tem uma casa verde e com portão azul, com os dizeres:" +
  "BOAS VINDAS, mas não deixe o gato sair".toUpperCase();
const juncao = `${troca} ${extra}`;
console.log(juncao);
