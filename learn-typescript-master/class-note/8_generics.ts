// function logText(text) {
//     console.log(text);

//     return text;
// }

// logText(10);
// logText('하이');

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

// 호출할 때, 인자와 타입을 같이 넘긴다.
logText<string>('하이');

// 타입이 다른데 로직이 같은 함수 여러개를 만들수 있다.
// 유니온 타입도 가능하지만,

function sayText(text: string | number) {
    console.log(text);
    return text;
}

sayText('a');
const num = sayText(10);
// 타입 가드가 이뤄지지 않으면 반환값이 여전히 유니온타입이다.

logText<string>('a');
logText<number>(10);

// 인터페이스에 제네릭 선언하는 방법

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = {
    value: 10,
    selected: false,
};
