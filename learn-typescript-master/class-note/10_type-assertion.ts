// 타입 단언
let a;
let b = a as string; // 개발자가 정하는 부분

// DOM API 조작

let div = document.querySelector('div');

if (div) {
    div.innerHTML; // div html 요소를 받아왔다고 확정할 수 없어서
}

let header = document.querySelector('#app') as HTMLDivElement; // 코드를 짜는 시점에 있는 게 확실하면

header.innerHTML;
