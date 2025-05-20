import { Product } from '../types';

export const featuredProducts: Product[] = [
  {
    id: 'fp1',
    name: 'Silk Evening Jacket',
    price: 1850,
    image: 'https://images.pexels.com/photos/6626642/pexels-photo-6626642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'fp2',
    name: 'Cashmere Turtleneck',
    price: 980,
    image: 'https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'fp3',
    name: 'Structured Blazer',
    price: 1450,
    image: 'https://images.pexels.com/photos/5592501/pexels-photo-5592501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

export const newArrivals: Product[] = [
  {
    id: 'na1',
    name: 'Merino Wool Coat',
    price: 2200,
    image: 'https://images.pexels.com/photos/6626754/pexels-photo-6626754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'na2',
    name: 'Tailored Pants',
    price: 780,
    image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'na3',
    name: 'Silk Evening Dress',
    price: 1750,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

export const allProducts: Product[] = [
  ...featuredProducts,
  ...newArrivals,
  {
    id: 'p1',
    name: 'Italian Leather Shoes',
    price: 1200,
    image: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'p2',
    name: 'Cashmere Scarf',
    price: 450,
    image: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'p3',
    name: 'Designer Sunglasses',
    price: 650,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];