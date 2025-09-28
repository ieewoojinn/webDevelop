/* 
    if(조건식){
        조건식이 true일 때 실행할 코드
    }
    else{
        조건식이 false일 때 실행할 코드
    }
*/

//age가 18세 이상이면 투표권 있고,  미만이면 투표권 없음.
let age = 25;
if(age >= 18){
    console.log("투표권 있습니다."); // 조건식이 true일 때 실행할 코드
}        
else{
    console.log("투표권 없습니다."); // 조건식이 false일 때 실행할 코드
}
console.log("프로그램 종료");

let score = 70;
if(score >= 90){
    console.log("A학점");
}  
else if(score >= 80){
    console.log("B학점");
}
else if(score >= 70){
    console.log("C학점");
}
else{
    console.log("F학점");
}