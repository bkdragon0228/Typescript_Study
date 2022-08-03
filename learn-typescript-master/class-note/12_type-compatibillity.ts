// 타입 호환

// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

// 구조적으로 큰게 오른쪽으로
let developer: Developer = { name: 'bk', skill: 'ts' };
let person: Person;
// developer = person; // 오류
// person = developer; // 가능

class People {
    name: string;
}

let people = new People();
people = developer; // 가능

// 함수
let add = function (a: number) {
    //
};

let sum = function (a: number, b: number) {
    //
};

// 구조적으로 큰게 왼쪽
sum = add; // 가능
// add = sum; // 오류

// 제네릭

interface Empty<T> {
    //
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
