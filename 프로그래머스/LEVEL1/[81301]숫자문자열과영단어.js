function solution(s) {
  const alphabet = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const alphabet_length = alphabet.length;
  while (isNaN(s)) {
    for (let i = 0; i < alphabet_length; i++) {
      s = s.replace(alphabet[i], number[i]);
    }
  }
  return Number(s);
}

solution('one4seveneight'); // 1478;
