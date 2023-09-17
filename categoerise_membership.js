``
const seniorMember = (data) => {
  return data.map(info => {
      if(info[0] >= 55 && (info[1] >= 7 && info[1] <= 26)){
    //   if(info[0] >= 55 && ( 7 >= info[1] <= 26)){
          return "Senior"
      }else{
          return "Open"
      }
  })

  ||
  
  data.map(([age, handicap]) =>
    age >= 55 && (handicap >= 7 && handicap <= 26) ? "Senior" : "Open"
  );
};
console.log(
  seniorMember([
    [23, 7],
    [56, 8],
    [59, 27],
  ])
)
