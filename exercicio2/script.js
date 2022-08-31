/*Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

c) Substitua os traços `________` por “sticioso”. */

const minhaString =
  "Eu não sou supersticioso, mas sou um pouco ________.      ";
let contagemEspacos = minhaString.trim(); //criei uma nova variavel e usei o comando trim para remover os espacos da variavel minha String
console.log(`Quantidade de caracteres: ${minhaString.length}`); //Esse console imprimirá a quantidade de caracters na minhaString, antes de remover o espaco. Ele poderia tbm ser escrito somente assim console.log(${minha.String.length})
console.log(
  `Quantidade de caracters depois da remocao de espacos: ${contagemEspacos.length}`
); //Esse console imprimirá a quantidade de caracters da contagemEspacos, depois dos espacos terem sidos removidos.

//c)
let replace = contagemEspacos.replace("________", "sticioso");
console.log(replace);
