// 인터페이스, 타입생성, 규칙
interface User {
    age: number;
    name: string;
}

let bk: User = {
    age: 26,
    name: 'bk',
};

// 함수의 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const bkboy = {
    name: 'bkboy',
    age: 27, // age가 없으면 오류가 발생함.
};
getUser(bkboy);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number;
}

let sum: sumFunction;
sum = function (a: number, b: number): number {
    return a + b;
};

// 인덱싱
// 인터페이스로 배열의 데이터를 정의하는 방법
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[3] = '10';
console.log(arr);

// 인터페이스 딕셔너리 패턴
interface StringRegexDic {
    [key: string]: RegExp;
}

let obj: StringRegexDic = {
    // 정규식
    cssFile: /\.css$/,
    // str: 'bkboy', // 오류, 정규표현식만
};

Object.keys(obj).forEach(function (value) {
    // value에 마우스를 올려보면, 타입을 알려준다.
    // 추론
});

// 인터페이스 확장(상속)

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    lang: string[];
}

let josh: Developer = {
    name: 'josh',
    age: 29,
    lang: ['js', 'react'], // 무조건 3개 다 있어야한다.
};
