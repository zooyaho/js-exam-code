/* flatpickr */
let $dateSelector = document.querySelector('.dateSelector');

$dateSelector.flatpickr({
  dataFormat: "Y-m-d",
  minDate: "today",
  maxDate: new Date().fp_incr(30), // 오늘 날짜 이전은 비활성, 오늘로부터 30일만 활성화하여 선택 가능한 옵션
  onChange: function(selectDates, dateStr, instance){
  // 날짜가 선택되었을 때 수행할 일

  },
});
