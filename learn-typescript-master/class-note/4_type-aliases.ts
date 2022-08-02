// 타입 별칭
// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
};

let bk: Person = {
    name: 'bk',
    age: 27,
};

type MyString = string;
let str: MyString = 'hello';

// 타입 별칭은 새로운 타입 생성이 아닌 정의한 타입에 참고하기 쉽게 이름을 부여하는 것
// 타입은 확장이 되지 않음
