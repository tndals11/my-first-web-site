
let userid = document.querySelector(".userid");
let passwd = document.querySelector(".passwd");
let button = document.querySelector("button");

// 페이지 로딩 후 바로 실행되는 자바스크립트 
window.onload = function(){
  userid.focus();
}

// //내부함수 방법
// button.onclick = function () {
//   alert("ok");    
// }

// //화살표 함수 
// button.onclick = () => {
//   alert("ok");    
// }

// button.addEventListener(이벤트, 함수);

button.addEventListener('click', function(e){
  e.preventDefault();
  
  //이벤트 발생 시 동작 처리
  if(userid.value == ""){
    alert("아이디를 입력하세요");
    userid.focus();
    return false;
  }
});

//input 버튼 -> 다음 페이지로 이동하려는 특징
//새로고침을 시도해 입력한 데이터를 없애는 것을 막아줌
// button.addEventListener('click', (e) => {
//   e.preventDefault(); //을 막아주는 역할
//   alert("ok");
// }) 