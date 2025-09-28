//구구단 출력하기

// 단 입력 받고 해당 단의 구구단 출력
let dan = Number(prompt("출력할 단을 입력하세요 (1~9)"));
for(let i=1; i<=9; i++){
    console.log(dan + " x " + i + " = " + (dan*i));
}

