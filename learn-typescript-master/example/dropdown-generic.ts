interface DropdownItem<T> {
    value: T;
    selected: boolean;
}

// interface Email {
//     value: string;
//     selected: boolean;
// }

// interface ProductNumber {
//     value: number;
//     selected: boolean;
// }
const emails: DropdownItem<string>[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];

// item의 타입이 다를 수 있음 두개다 수용할 수 있게해야 한다.
function createDropdownItem<T>(item: DropdownItem<T>) {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
    const item = createDropdownItem<string>(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
});

// 상품 개수 트롭다운 아이템 추가
numberOfProducts.forEach((product) => {
    const item = createDropdownItem(product);
});
