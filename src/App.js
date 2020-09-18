import React from 'react';

function Food({fav}) {
  return (
  <h3>I love {fav}</h3>
  );
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Food fav="김치"/>
    <Food fav="치킨"/>
    <Food fav="햄버거"/>
    <Food fav="피자"/>
    <Food fav="콜라"/>
  </div>
  );
}

export default App;
