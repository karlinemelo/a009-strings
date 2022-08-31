/* Exercicio
Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details> */

let nome = prompt("Qual seu nome?");
let primeiraComida = prompt("Qual sua primeira comida favorita?");
let segundaComida = prompt("Qual a sua segunda comida favorita?");
let terceiraComida = prompt("Qual a sua terceira comida favorita?");

const frase = `Essas são as tres comidas favoritas do usuário ${nome}. \n ${primeiraComida} \n ${segundaComida} \n ${terceiraComida}`;
console.log(frase);
