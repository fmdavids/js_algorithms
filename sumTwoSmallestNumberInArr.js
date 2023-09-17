``
const sumTwoSmallestNumberInArr = (numbers) =>{
    const [firstNum, secondNum] = numbers.sort((a,b) => a-b) 

    return firstNum + secondNum
}
console.log(sumTwoSmallestNumberInArr([5,19, 2,42, 77]))