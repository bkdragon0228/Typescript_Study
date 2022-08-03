// enum
// 별도의 값을 넣지 않으면 숫자형 enum
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0, 값을 넣은 후부턴 나이키가 나온다.

// 활용 예제

enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer): void {
    if (answer === Answer.Yes) {
        console.log('정답');
    }

    if (answer === Answer.No) {
        console.log('오답');
    }
}

// askQuestion('예스');
// askQuestion('y');
// askQuestion('YES');

askQuestion(Answer.Yes);
