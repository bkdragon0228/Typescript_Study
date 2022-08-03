// es6

class Person {
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

const bk = new Person('bk', 26);

console.log(bk); // Person { name: 'bk', age: 26 }
