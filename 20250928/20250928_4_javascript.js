// 로그인 및 관리자 권한 확인하기

// 로그인이 되었는가 확인
// 로그인한 사용자의 권한 확인

let loggedIn =false; //true: 로그인, false: 로그아웃
let userRole = ""; //사용자의 권한: 관리자: "admin", 일반: "user"

let login = prompt("a. 로그인 / b. 로그오프 (둘 중 선택)");
userRole = prompt("a. 관리자 / b. 일반 사용자 (둘 중 선택)");
//login의 값을 이용해서 loggedIn이 true/false로 변경

//1. login이 "a"이면 loggedIn을 true로 변경
if(login == "a"){
    loggedIn = true;
}
else{
    loggedIn = false;
}

//2. 로그인 상태 확인
if(loggedIn==true){
    console.log("=== 로그인이 되었습니다 ===");
    alert("=== 로그인이 되었습니다 ===");
    
    //3 로그인한 사용자 중에 관리자인지 확인
    if(userRole == "a"){    
        console.log("관리자님, 환영합니다");
    } 
    else{
        console.log("일반 사용자님, 환영합니다");
    }
    else{
        console.log("=== 로그인 필요 ===");
    }
}