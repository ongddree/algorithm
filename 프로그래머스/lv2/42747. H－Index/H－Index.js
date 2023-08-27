function solution(citations) {
   const sortedCitations = citations.sort((a,b) => b-a);
   let answer = 0;
   for (let i = 0; i < sortedCitations.length; i++) {
     console.log(sortedCitations[i] ,i + 1);
     if (sortedCitations[i] >= i + 1) {
       answer = i + 1;
     }
   }
   return answer;
}