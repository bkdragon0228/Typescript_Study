// function logMessage(value: string): void {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(10); // 오류

// 유니온 타입
// 변수에 한가지 이상의 타입을 사용한다.

let bk: string | number | boolean;

function logMessage(value: string | number) {
    // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정
    if (typeof value == 'number') {
        console.log(value); // type이 number로 정의됨!
    } else {
        console.log(value);
        // type이 string으로 정의되고
        // 어떤 메서드를 사용할 수 있는지까지 확인이 가능하다.
    }

    throw new TypeError('value must ne string or number');
}

logMessage(10);
logMessage('hello');

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 유니온 타입의 특징 : 공통된 속성에만 접근 할 수 있다.
function askSomeone(someone: Developer | Person) {
    // 처음에 공통속성에만 접근 할 수 있음. 아직 모르니 name만 뜬다.
    someone.name;
    // someone.skill; // error
}

// intersection Type - '&'
let yj: string & number & boolean;

function askSometwo(someone: Developer & Person) {
    someone.age;
    someone.skill; // error x
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

// askSometwo({ name: '디벨로퍼', skill: '웹 개발' }) // 오류
askSometwo({ name: '디벨로퍼', skill: '웹 개발', age: 29 }); // 새로운 유형의 타입이 된다.
