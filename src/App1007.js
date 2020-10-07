import React from 'react';
import PropTypes from 'prop-types';

// 이미지 처리
import imgA from './images/kimchi.jpg';
import imgB from './images/hamburger.jpg';
import imgC from './images/pizza.jpg';
import imgD from './images/chicken.jpg';
import imgE from './images/tteokbokki.png';

function Food({name, image, altText, rating}) {
  return (
  <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={image} alt={altText}/>
  </div>
  );
}

const FoodILike = [
  {
    id: 1,
    name: '김치',
    image: imgA,
    altText: '김치',
    rating: 5.0
  },
  {
    id: 2,
    name: '햄버거',
    image: imgB,
    altText: '햄버거',
    rating: 5.0
  },
  {
    id: 3,
    name: '피자',
    image: imgC,
    altText: '피자',
    rating: 5.0
  },
  {
    id: 4,
    name: '치킨',
    image: imgD,
    altText: '치킨',
    rating: 5.0
  },
  {
    id: 5,
    name: '떡볶이',
    image: imgE,
    altText: '떡볶이',
    rating: 5.0
  }
];

function App() {
  return(
  <div>
    {FoodILike.map(dish => (
      <Food key ={dish.id} name={dish.name} image={dish.image} altText={dish.altText} rating={dish.rating}/>
    ))};
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;
