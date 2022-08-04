type Heroes = 'Hulk' | 'capt' | 'Thor';

type HeroAges = { [k in Heroes]: number }; // 기존에 존재하는 타입을 변경!

const ages: HeroAges = {
    Hulk: 100,
    capt: 100,
    Thor: 1000,
};
