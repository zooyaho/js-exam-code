/* flatpickr */
let $dateSelector = document.querySelector('.dateSelector');
const $toDoListContain = document.querySelector('.toDoList-con');
let $toDoListWrap;
let $toDoListUl;

let selectDate; // 선택한 날짜
let writeValue; // 추가할 할일
let addWrapHtml;
let addlistHtml;

let inputId = 0;
let wrapNum = -1; // 임의로 둔거, 0으로 바꿀 예정

$dateSelector.flatpickr({
  dataFormat: "Y-m-d",
  minDate: "today",
  maxDate: new Date().fp_incr(30), // 오늘 날짜 이전은 비활성, 오늘로부터 30일만 활성화하여 선택 가능한 옵션
    onChange: function(selectDates, dateStr, instance){
    // selectedDates : 사용자가 선택한 Date 객체의 배열. 선택한 날짜가 없으면 빈 배열
    // dateStr : 사용자가 가장 최근에 선택한 Date 객체의 문자열 표현
    // instance : 다양한 메서드와 속성을 포함하는 flatpickr 객체

      // 날짜가 선택되었을 때 수행할 일
      selectDate = dateStr;
      
      // 날짜가 바뀌면 새로운 toDoListWrap 생성
      addWrapHtml = "<div class='toDoList-Wrap'><div class='date'><p>"+ dateStr + "</p></div><ul></ul></div></div>";

      // 자식 요소로 div.toDoList-Wrap 추가
      $toDoListContain.innerHTML += addWrapHtml;

      $toDoListWrap = document.querySelectorAll('.toDoList-Wrap');

      // display="none"으로 하다가 추가되면 보이는걸로
      ++wrapNum; // 새로운 toDoListWrap의 index
      console.log('새로 생긴 listWrap 요소: ',$toDoListWrap[wrapNum]);
      $toDoListWrap[wrapNum].style.display = 'none';

  },
});

// [FN] 선택한 날짜에 할일 리스트 추가
function addList() {
  writeValue = document.querySelector('textarea').value;
  addListHtml = "<li><input type='checkbox' name='list' id=" + inputId +"><label for="+ inputId +"><div><div></div></div><span>" +  writeValue + "</span></label></li>";
  $toDoListUl = document.querySelectorAll('.toDoList-Wrap ul');
  console.log('$toDoListUl: ',$toDoListUl);

  $toDoListWrap[wrapNum].style.display = 'block'; // toDoListWrap 보임
  $toDoListUl[wrapNum].innerHTML += addListHtml;
  document.querySelector('textarea').value = '';
}

// [FN] 선택한 리스 날짜에 해당하는 리스트 삭제
function deleteList() {
  let $checkedList = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log($checkedList);
  let $deleteLi; // 삭제할 li 요소
  let $emptyUl; // 빈 목록
  let $emptyWrap; 
  let count = 0;

  for(let i=0; i < $checkedList.length; i++) {
    $deleteLi = $checkedList[i].parentNode;

    $emptyUl = $deleteLi.parentElement;
    $emptyUl.removeChild($deleteLi);
    count++;
  }

  $emptyWrap = $emptyUl.parentElement;
  // toDoList-Wrap이 비어있을 경우 삭제
  if($checkedList.length == count) {
    $toDoListContain.removeChild($emptyWrap);
    count = 0; // reset
  }
}

// [EVENT] 추가 버튼에 클릭이벤트 등록
document.querySelector('.btn-add').addEventListener('click', function(){
  addList();
  inputId++;
});

// [EVENT] 삭제 버튼에 클릭이벤트 등록
document.querySelector('.floating-btn').addEventListener('click', function(){
  deleteList();
});
