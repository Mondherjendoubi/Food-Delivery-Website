import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
    'Latte',
    'Cappuccino',
    'Americano',
    'Espresso',

];
const PRODUCT_IMG_URL = [
    'https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg',
    'https://www.thespruceeats.com/thmb/SyX_yUyCFOtuqWC2QFrM25JTmsA=/4413x2942/filters:fill(auto,1)/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg',
    'https://www.homegrounds.co/wp-content/uploads/2019/08/americano-e1522545816957.jpg',
    'data:image/jpeg;base64,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',
];


const PRODUCT_COLOR = ['#433306'];

// ----------------------------------------------------------------------

const drinks = [...Array(4)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        cover:PRODUCT_IMG_URL[index],
        name: PRODUCT_NAME[index],
        price: faker.datatype.number({ min: 4, max: 10, precision: 0.1 }),
        priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
        colors:
            (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
            (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
            (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
            (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
            (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
            (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
            PRODUCT_COLOR,
        status: sample(['new', '', '']),
    };
});

export default drinks;
