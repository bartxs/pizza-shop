import product1 from '../../images/product1.jpg'
import product2 from '../../images/product2.jpg'
import product3 from '../../images/product3.jpg'
import dessert1 from '../../images/dessert1.jpg'
import dessert2 from '../../images/dessert2.jpg'
import dessert3 from '../../images/dessert3.jpg'

export const productData = [
    {
        img: product1,
        alt: 'Pizza',
        name: 'Pizza Supreme',
        desc: 'Tomato sauce, basil, peperoni, olives and pesto',
        price: '$19.99',
        button: 'Add to Cart!'
    },
    {
        img: product2,
        alt: 'Pizza',
        name: 'Pizza Peperoni',
        desc: 'Tomato sauce, basil, peperoni, cheese',
        price: '$15.99',
        button: 'Add to Cart!'
    },
    {
        img: product3,
        alt: 'Peperoni ',
        name: 'Pizza Special',
        desc: 'Tomato sauce, basil, peperoni, olives, paprika, red onion',
        price: '$16.99',
        button: 'Add to Cart!'
    },
]

export const productDataTwo = [
    {
        img: dessert1,
        alt: 'French doughnut',
        name: 'French Crullers',
        desc: `Ring-shaped doughnuts made from pâte à choux that's fried and dipped in a sweet glaze.`,
        price: '$6.99',
        button: 'Add to Cart!'
    },
    {
        img: dessert2,
        alt: 'Lava cake',
        name: 'Lava Cake',
        desc: 'Delicate chocolate cake with white and dark liquid chocolate inside it.',
        price: '$5.99',
        button: 'Add to Cart!'
    },
    {
        img: dessert3,
        alt: 'Brownie',
        name: 'Ice cream on Brownie',
        desc: 'Fresh and soft brownie with home made vanila ice cream, topped with chocolate sauce.',
        price: '$8.99',
        button: 'Add to Cart!'
    },
]

export const allData = {
    productData, productDataTwo
}

