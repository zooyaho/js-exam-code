const numbersDiv = document.querySelector(".numbers");
const drawBtn = document.querySelector("#draw");
const resetBtn = document.querySelector("#reset");

const lottoNumbers = [];
const colors = ['red', 'orange', 'green', 'blue', 'purple'];

/* paintNumber fn */
function paintNumber(number){
  const eachNumDiv = document.createElement("div");
  let colorIndex = Math.floor(number / 10);

  eachNumDiv.classList.add("eachnum");
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

/* 추첨 */
drawBtn.addEventListener("click", function(){
  while(lottoNumbers.length < 7){
    let ran = Math.floor(Math.random() * 45) + 1;
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran);
      paintNumber(ran);
    }
  }
  // console.log(lottoNumbers);
});

/* 다시 */
resetBtn.addEventListener("click", function(){
  lottoNumbers.splice(0, 7);
  numbersDiv.innerHTML = "";
});