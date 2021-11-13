window.addEventListener("load", ()=>{
  let firstArg = null;
  let secondArg = null;
  const result = document.querySelector('.result');
  const resultsContainer = document.querySelector('.results-container')
  const tryButton = document.querySelector('.try-button');
  
  function getNumbers(){
    firstArg = parseFloat(prompt('Please, input the first number!'));
    secondArg = parseFloat(prompt('Great! And the last one!'));
  }
  
  function checkNumbers(val1, val2){
    if(isNaN(val1) || isNaN(val2)){
      return alert('Please, input valid numbers!'); 
    } else{
      return [val1, val2]
    }
  };
  
  const doSum = (num1, num2)=> num1 + num2;
  const doSubtr = (num1, num2)=> num1 - num2;
  const doMult = (num1, num2)=> num1*num2;
  const doDiv = (num1, num2) => num1 / num2;
  
  const doMath = ([num1, num2] = [])=>{
    const results = {}; 
    results.Summing = doSum(num1, num2);
    results.Subtraction= doSubtr(num1, num2);
    results.Multiplication = doMult(num1, num2);
    results.Division = doDiv(num1, num2);
    return results;
  
  }
  
  const createNode = ({Summing, Subtraction, Multiplication, Division})=>{
    return `
      <div>
      <h2>Here're results</h2>
      <table>
      <tr><th>Summing</th><th>Subtraction</th><th>Multiplication</th><th>Division</th></tr>
      <tr><td>${Summing}</td><td>${Subtraction}</td><td>${Multiplication}</td><td>${Division}</td></tr>
      </table>
      </div>
    `
  }
  
  const showRes = ()=>{
    getNumbers()
    const arrNum = checkNumbers(firstArg, secondArg);
    if(arrNum){
    const resultsValue = doMath(arrNum);
    const markUp = createNode(resultsValue);
    result.innerHTML = '';
    result.insertAdjacentHTML('afterbegin', markUp)
    resultsContainer.classList.add('show-up')
    } else {
      showRes();
    }
  };
  showRes();
  tryButton.addEventListener('click', ()=>showRes())
});

