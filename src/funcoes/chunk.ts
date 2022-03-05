/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */

 export const chunk = (valores: number[], tamanho: number): number[][] => {
  let a: number[][]

    a = valores.reduce((acumulador, item, indice) => {
    let grupo = Math.floor(indice / tamanho);
    acumulador[grupo] = [...(acumulador[grupo] || []), item];
    return acumulador;
  }, [])

  return a;
};