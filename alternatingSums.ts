function alternatingSums(values: number[]):number[]{
  let team1 = 0;
  let team2 = 0;

  values.forEach((value:number, index) => index % 2 === 0 ? team1 += value : team2 += value);
  return [team1, team2];
}
console.log(alternatingSums([10,20,30,40,50,60]));