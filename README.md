# 홍예연 201930435

## movie_app_2020
React JS Fundamentals Course 2020

## 12월 1일- cdn
>1. 간단한 컴포넌트
>>* XML과 유사한 문법인 JSX를 사용
>>* 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근 가능
>2. 상태를 가지는 컴포넌트
>>* this.props나 this.state로 내부적인 상태 데이터를 가질 수 있음
>>* 컴포넌트의 상태 데이터가 바뀌면 render()가 다시 호출되어 마크업이 갱신됨
>3. 애플리케이션
>>* props와 state를 사용
>>* state를 사용해 사용자가 입력한 텍스트와 할 일 목록을 관리

## 11월 20일
>1. Navigation 컴포넌트 App 컴포넌트에 포함 시키기
>>* App 컴포넌트에 Navigation을 import시키고, HashRoute에서 불러오게 한다
>2. a 태그 Link 컴포넌트로 바꾸기
>3. Navigation 컴포넌트 위치 다시 확인하기
>>* HashRouter 바깥에 위치했던 Navigation 컴포넌트를 안쪽으로 이동
>4. Movie 컴포넌트에 Link 컴포넌트 추가하기 
>>* 이제 영화 카드를 누르면 /movie-datail로 이동
>5. Detail 컴포넌트 만들고 Route 컴포넌트 추가하기
>6. Detail 컴포넌트 함수형에서 클래스형 컴포넌트로 변경하기
>7. push() 함수 사용하기
>>* location.state가 undefined인 경우 history.push("/")
>8. location.state 확인하기
>>* location.state가 없으면 render() 함수가 null을 반환하도록 수정
>9. 영화 앱 깃허브에 배포하기
>>* package.json 파일 수정 -> browserslist키 아래에 homepage키 추가
>>* scripts 키값으로 predeploy, deploy에 명령어 추가
>>* gh -page 설치
>>* https://[깃허브 계정].github.io/[저장소 이름]



## 11월 13일
>1. 영화 앱 다듬기
>2. react-router-dom 설치하기
>3. Home.js 수정하기
>>* App.js의 코드를 Home.js로 복사
>4. HashRouter와 Route컴포넌트
>>* HashRouter 컴포넌트가 Route 컴포넌트를 감싸 반환하도록 App.js를 수정
>5. Route 컴포넌트에 path, component props 추가하기
>6. Home 컴포넌트를 위한 Route 컴포넌트 추가하기
>>* 서버에 접속하면 Home 컴포넌트를 기본으로 보여주기 위해 path props를 "/"으로 입력
>7. Route 컴포넌트에 exact props 추가하기
>>* path props가 "/"인 Route 컴포넌트에 exact={true} 추가
>>* "/"가 정확히 일치할 때만 Home 컴포넌트가 출력되도록 함

## 11월 06일
>1. App컴포넌트에 HTML추가하기
>2. Movie컴포넌트에 HTML추가하기
>3. 영화 포스터 이미지 추가하기
>>* img tag를 그 아래 추가해서 src속성에는 poster props를, alt속성에는 title props를 전달
>4. App.css, Movie.css 생성하기
>5. Movie 컴포넌트에 genres props 넘겨주기
>6. class 속성 이름 className으로 바꿔주기
>>* HTML의 class와 자바스크립트의 class라는 이름이 겹치면 리액트가 혼란스러울 수 있기 때문
>7. 영화 장르 출력하기
>>* genres props가 배열이므로 map() 함수 사용
>8. li tag에 key props 추가하기

## 10월 30일
>1. movies state에 영화 데이터 저장하기
>>* this.setState({movies})로 작성
>2. isLoading state를 true에서 false로 업데이트하기
>>* 처음에는 Loading이 화면에 나타나다가 조금 시간이 지나면 movies state 출력
>3. Movie 컴포넌트 만들기
>>* state가 필요하지 않으므로 함수형 컴포넌트로 작성
>>* Movie에 넘어와야 하는 영화 데이터를 정의하고, 관리하기 위해 prop-types를 사용
>4. Movie.propTypes 작성하기
>>* ex) id: PropType.number.isRequired
>5. axios.get() 수정하기
>>* axios.get()에 yts-proxy.now.sh/list_movies.json?sort_by=rating 전달
>6. Movie 컴포넌트를 반환하도록 movies.map() 수정하기
>>* Movie 컴포넌트를 import한 다음, movies.map()에 전달한 함수가 <Movie / >를 반환


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