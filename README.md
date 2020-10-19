# 홍예연 201930435

## movie_app_2020
React JS Fundamentals Course 2020

## 10월 16일
>1. constructor() 함수 알아보기
>2. componentDidMount() 함수 알아보기
>3. componentDidUpdate() 함수 알아보기
>4. componentWillUnmount() 함수 알아보기
>5. isLoading state 추가
>>* 앱이 실행(mount)되는 초기에는 무조건 로딩 상태이기 때문에 값은 true
>6. 로딩 현상 구현하기
>>* componentDidMount()함수의 첫번째 인자로 setTimeout() 함수를 전달, 두번째 인자로 시간을 전달
>>* isLoading을 강제로 false로 바꿈

## 10월 07일
>1. prop-types 사용하기
>2. state로 숫자 증감 기능 만들기 
>>* state는 동적 데이터를 다룰 때 사용 <br>
>>* props는 동적 데이터를 다루지 못함
>3. App클래스가 React.Component 클래스를 상속 받게 하기
>>* extends React.Component 붙이기 <br>
>>* App 클래스는 리액트가 제공하는 Component 클래스를 반드시 상속받아야 함
>4. render() 함수 사용하기
>>* 클래스형 컴포넌트에서 JSX를 반환하기 위해 render() 함수를 사용
>5. state 정의하기
>>* state는 객체 형태의 데이터 <br>
>>* state를 사용하려면 반드시 클래스형 컴포넌트 안에서 소문자로 적어야 함
>6. state에 count값 추가하고 사용하기
>>* render() 함수에서 {this.state.count}를 출력
>7. 버튼을 눌러서 count state값 변경해보기
>8. setState()함수로 count state 변경하기
>9. state의 변화에 따라 바뀌는 html 살펴보기
>10. add(), minus() 함수 개선하기
>>* current 사용

## 09월 25일
>1. 이미지를 받을 땐 import 사용
>2. 이미지에 alt 속성 추가
>3. map 함수 활용

## 09월 18일
>1. 컴포넌트가 무엇인지 알아보고, JSX를 학습.
>2. JSX는 단지 HTML과 자바스크립트를 조합한 문법이다.
>3. 컴포넌트 이름의 첫자는 반드시 대문자로 해야한다.
>4. 컴포넌트에 데이터를 전달 할 때는 props를 사용한다.
>5. 점 연산자를 대신해서 ES6의 구조 분해 할당을 사용할 수 있다.
>6. 리액트는 다수의 컴포넌트로 이루어지나, 최종적으로는 하나의 컴포넌트만 사용한다.

## 09월 11일
>1. Dothome에 index file 수정하기
>2. readme.md 수정 후 Github에 push하기