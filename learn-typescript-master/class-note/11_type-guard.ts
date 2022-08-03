interface Person {
    name: string;
    age: number;
}

interface Devloper {
    name: string;
    skill: string;
}

function introduce(): Devloper | Person {
    return { name: 'Tony', age: 33, skill: 'Iron' };
}

const tony = introduce(); // 유니온 타입에는 공통된 속성에만 접근 할 수 있음
// console.log(tony.skill);

// 타입 단언을 사용한다면?
if ((tony as Devloper).skill) {
    let skill = (tony as Devloper).skill;
    console.log(skill);
}

// 타입가드!
// 함수로
// 특정 문맥에서 개발자가 의도한 타입으로 보장되게 하는 코드
function isDeveloper(target: Person | Devloper): target is Devloper {
    // is => 타입 서술어
    return (target as Devloper).skill !== undefined;
}

if (isDeveloper(tony)) {
    tony.skill;
} else {
    tony.age;
}
