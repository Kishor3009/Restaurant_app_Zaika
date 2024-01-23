import images from './images';

const wines = [
  {
    title: 'Chicken Biryani',
    price: '320',
    tags: 'Fragrant basmati rice cooked with succulent chicken pieces and aromatic spices.',
  },
  {
    title: 'Mutton Curry',
    price: '750',
    tags: 'Tender lamb cooked to perfection in a rich, spicy curry sauce.',
  },
  {
    title: 'Buttor Chicken',
    price: '440',
    tags: 'Juicy pieces of chicken in a velvety tomato-based sauce, infused with buttery goodness.',
  },
  {
    title: 'Fish Curry',
    price: '490',
    tags: 'Marinated fish, delicately spiced and charred to perfection in the tandoor.',
  },
  {
    title: 'Prawns Curry',
    price: '680',
    tags: 'Plump prawns cooked in a flavorful masala, a spicy delight for seafood lovers.',
  },
];

const cocktails = [
  {
    title: 'Paneer Masala',
    price: '280',
    tags: 'Spicy taste with india masala',
  },
  {
    title: "Kaju Curry",
    price: '280',
    tags: 'Hot and Spice with sweeting taste',
  },
  {
    title: 'Mushroom masala',
    price: '270',
    tags: 'Fried Mashroom with firey spice',
  },
  {
    title: 'Paneer Chilli',
    price: '320',
    tags: 'Garlanded with capsicum and fried onions',
  },
  {
    title: 'Paneer Angara',
    price: '350',
    tags: 'Anagara Tikka with roasted panner',
  },
  {
    title: 'Paneer laziz',
    price: '440',
    tags: 'Spicy taste with india masala and arab roast',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Best Fast-food award in 2023',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Best Emerging chef 2024 By Hotel India',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Best Hotel Award by Indian Hotels 2023',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Best chef award by chef India Association',
  },
];

export default { wines, cocktails, awards };
