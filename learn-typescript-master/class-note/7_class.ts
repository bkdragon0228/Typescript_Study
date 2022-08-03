class Person {
    // 최상단에 사용할 변수의 타입을 정의해줘야함.
    // 접근 방식을 정할 수 있다.
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
