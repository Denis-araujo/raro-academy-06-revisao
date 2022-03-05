/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
 export const uniq = <T>(args: T[]): T[] => {
  args = args.filter(function(elemento, index, self) {
    return index === self.indexOf(elemento);
  });

  return args;
};