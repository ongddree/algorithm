function solution(id) {
  let newId = id
    .toLowerCase()
    .replace(/[^\w-_.\s]/g, '')
    .replace(/[.]+/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  return newId.padEnd(3, newId[newId.length - 1]);
}

solution('...!@BaT#*..y.abcdefghijklm'); // 'bat.y.abcdefghi'
