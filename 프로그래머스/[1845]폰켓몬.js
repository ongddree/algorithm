function solution(pokemonList) {
  const max = pokemonList.length / 2;
  const pokemonTypeNum = [...new Set(pokemonList)].length;
  return pokemonTypeNum > max ? max : pokemonTypeNum;
}

//solution([3,3,3,2,2,4])  3
