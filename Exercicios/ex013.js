// Logica de programação 03:

// Escreva uma função que retorne:
/*
Número é divisivel 3 por retorne: Fizz
Número é divisivel 5 por retorne: Buzz
Número é divisivel 3 e 5 por retorne: FizzBuzz
Número não é divisivel por 3 e 5 retorna: o próprio número
Se é realmente um número
Use números de 0 a 100
*/

const divisor = (n) => {
  switch (typeof n) {
    case "number":
      switch (true) {
        case n % 3 === 0 && n % 5 === 0:
          console.log("FizzBuzz");
          break;
        case n % 3 === 0:
          console.log("Fizz");
          break;
        case n % 5 === 0:
          console.log("Buzz");
          break;
        default:
          console.log(n);
          break;
      }
      break;

    case "string":
      console.log("Esse valor é uma STR");
      break;
  }
};

function random(min = 0, max = 100) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

divisor(random(0, 100));
divisor("23");
