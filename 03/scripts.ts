const tabuadas = (numeros: number[]): string => {
  let resultado: string = "";

  for (const n of numeros) {
    for (let i = 0; i <= 10; i++) {
      resultado += `${n} X ${i} = ${n * i} \n`; // \n = quebra de linha

      if (i === 10) {
        resultado += "------------------ \n";
      }
    }
  }

  return resultado;
};

console.log(tabuadas([1, 5, 2]));
