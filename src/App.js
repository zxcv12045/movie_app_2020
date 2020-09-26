import React from 'react';
import imgA from './images/kimchi.jpg';
import imgB from './images/hamburger.jpg';
import imgC from './images/pizza.jpg';
import imgD from './images/chicken.jpg';
import imgE from './images/tteokbokki.png';

function Food({name, image, altText}) {
  return (
  <div>
    <h2>I love {name}</h2>
    <img src={image} alt={altText}/>
  </div>
  );
}

const FoodILike = [
  {
    id: 1,
    name: '김치',
    image: imgA,
    altText: '김치'
  },
  {
    id: 2,
    name: '햄버거',
    image: imgB,
    altText: '햄버거'
  },
  {
    id: 3,
    name: '피자',
    image: imgC,
    altText: '피자'
  },
  {
    id: 4,
    name: '치킨',
    image: imgD,
    altText: '치킨'
  },
  {
    id: 5,
    name: '떡볶이',
    image: imgE,
    altText: '떡볶이'
  }
];

function App() {
  return(
  <div>
    {FoodILike.map(dish => (<Food key ={dish.id} name={dish.name} image={dish.image} altText={dish.altText}/>))};
  </div>
  );
}

export default App;
