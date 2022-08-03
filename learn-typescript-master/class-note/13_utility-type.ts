interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 api 함수
function fetchProducts(): Promise<Product[]> {
    //
}

type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>; // 일부를 뽑는 유틸리티 타입!
// 특정 상품 상세 정보를 받아오기
function displayProductDetail(shoppingItem: shoppingItem) {
    // 프로덕트 인터페이스와는 좀 다른 형태의 인풋이라면?
    // 새로운 타입을 만들기보단 유틸리티 타입 사용
}

// 특정 상품 정보를 갱신하는 함수
// Product에서 특정 몇개만 사용하고 싶은것, (=모든 속성을 옵셔널로 바꾼다!)
// 모든 부분집합의 조합
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct) {
    //
}

// 유틸리티 타입 구현하기 - Partial

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// #1
type UserProfilUpdate = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

//#2
type UserProfileUpdate = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]; // 맵드 타입
};

// #3
type UsesrProfileUpdata = {
    [p in keyof UserProfile]?: UserProfile[p];
};

// #4
type Subset<T> = {
    [p in keyof T]?: T[p];
};

// Partial의 실제 모양
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
