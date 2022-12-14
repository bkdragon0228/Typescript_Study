// 함수 타입

// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}

sum(10, 20); // 타입 추론으로 반환값 타입을 알고있다.

// 함수의 반환 값에 타입을 정의하는 방식.
function add(): number {
    return 10;
}

// 합친 버전(기본)
function sol(a: number, b: number): number {
    return a + b;
}

// sol(10,20, 30, 40); // '2개의 인수가 필요한데 4개를 넣었다' 고 알려줌

// 옵셔널 파라미터 - 선택적 파라미터
// 특정 파라미터를 선택적으로 사용하고 싶을 때
function log(a: string, b?: number): void {
    console.log(a);
    console.log(b);
}

log('hello world');
log('hello ts', 100);
