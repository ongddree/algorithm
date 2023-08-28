function solution(routes) {
  let lastPosition = -30000;
  let answer = 0;
  const sortedRoutes = routes.map((a) => a.sort((a,b) => a-b)).sort((a,b) => a[1] - b[1]);
  for (route of sortedRoutes) {
    if(lastPosition < route[0]) {
      answer ++;
      lastPosition = route[1];
    }  
  }

  return answer;
}