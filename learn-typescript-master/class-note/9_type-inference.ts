// 타입 추론
let a; // any, 변수가 선언 초기화 될 때 타입 추론이 일어난다.
let b = 10; // number
let c = 'c'; // string

function getD(d = 10) {
    return d; // 반환값을 정할때도 타입 추론이 일어남.
}

// 인터페이스와 제네릭을 이용한 타입 추론

// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// // value의 타입을 자연스럽게 추론
// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello',
// };

// 복잡한 구조에서 타입추론

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
    desciption: string;
    tag: T;
}

let DetailedItem: DetailedDropdown<number> = {
    title: 'abc',
    desciption: 'ab',
    value: 1, // number
    tag: 2, // number
};

// Best Common Type : 가장 적절한 타입

const arr1 = [1, 2, 3]; // number[]
const arrr = [1, 2, true]; // (number | boolean)[] => 교집합을 찾아내는! 유니온 타입
