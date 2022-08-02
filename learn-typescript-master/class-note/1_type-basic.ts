// 기본 타입

// ts식 선언 방식
const str2 = 'hello';
const num = 10;
const arr: Array<number> = [1, 2, 3]; // 넘버타입이 들어가는 배열
const heroes: Array<string> = ['capt', 'thor', 'hulk']; // 안에 숫자를 넣으면 오류 발생

// 배열 선언 다른 방식
const items: number[] = [1, 2, 3];

// ts 튜플
// 배열 인덱스에 타입까지 설정하는 것
const address: [string, number] = ['gangnam', 100];

// ts 객체
const obj: object = {};
const person: object = {
    name: 'capt',
    age: 'hello',
    // 따로 오류가 나지 않음
};
// 구체적으로 가능
const person2: { name: string; age: number } = {
    name: 'bk',
    age: 26,
};

// ts 진위값
const show = true;
