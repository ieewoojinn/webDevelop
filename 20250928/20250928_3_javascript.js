//놀이공원 입장료 계산하기

//나이에 따른 입장료가 다름.
// 1. 나이가 65세 이상 or 10세 미만 :5000원
// 2. 청소년(10~19세) : 8000원
// 3. 그 외에는: 10000원

let age = 0; // 나이
let fee = 0; // 기본 입장료

//prompt로 받는 값은 문자열이라 숫자 인식 못함.
//number() 함수를 이용해서 숫자를 문자열로 형변환을 한다.



//prompt() 함수를 이용해서 사용자에게 나이를 입력 받는다.
let age1 =prompt("나이를 입력하세요: ");
age = Number(age1); //문자열을 숫자로 형변환
console.log("입력한 나이: " + age + "세");
if(age < 10 || age >= 65){
    fee = 5000;
    console.log("=== 경로 / 유아 할인 대상 ===");
}
else if(age >= 10 && age < 20){
    fee = 8000;
    console.log("=== 청소년 힐인 대상 ===");
}       
else{
    fee = 10000;
    console.log("=== 일반 ===");
}
console.log("나이:"+age+ ",입장료: " + fee + "원");
console.log("즐거운 시간 되세요!");