window.addEventListener("load",function(){
  var template = document.querySelector("#lotto-ball-template");
  var lottoBallDiv = template.content.children[0];
  var lottoWrapperDiv = document.querySelector(".lotto-wrapper");

  for(let i=0; i < 7; i++){
    var cloneDiv = document.importNode(lottoBallDiv, true);
    lottoWrapperDiv.appendChild(cloneDiv);
    console.log("append child")
  }

  for(let i=0; i<7; i++){
    moveBall(cloneDiv)
  }

  function moveBall(target, delay){
    setTimeout(function(){
      target.classList.add("activ");
    },delay);
  }

});