<h1> 🎥 Infinite Scroll 영상 </h1>

![infiniteScroll](https://user-images.githubusercontent.com/45257139/127225478-75bbe0e2-68a7-4efa-a9fd-1c6960b8f210.gif)
          

<br />
<h2>📝 과제 구현 목록</h2>

- 무한 스크롤 구현
  - Intersection Observer 커스텀 훅을 사용한 무한 스크롤 기능 구현
  - 스크롤이 중간 쯤 내려왔을 때 API요청 (데이터가 끊기지 않고 렌더링되기 위함)
  - 마지막 page 도달 후(fetch의 응답값이 빈 배열인 경우) 다음 요청을 하지 않도록 분기 처리

![51까지만](https://user-images.githubusercontent.com/45257139/127225600-0f6cd462-fbd0-4822-98bc-fb98efafe508.PNG)

<br />
<h2> 👯‍♂️ 팀원</h2>

- [라끄베르 김남주](https://github.com/skawnkk?tab=repositories)
- [잠 좀 자고싶은 박현찬](https://github.com/Eyes0n)

<br />
<h2>⚙️ 설치 및 실행</h2>

1. Clone
   ```
   git clone https://github.com/skawnkk/hayanMind.git
   ```
  
2. Install NPM packages
   ```
   yarn install
   ```
   
3. Start
   ```
   yarn start
   ```
   

<br />
<h2>🧬 프로젝트 구조 </h2>

```html
  src/
  ㄴ components/
    ㄴ Card.js
    ㄴ InfiniteCardList.js

  ㄴ hook/
    ㄴ useObserver.js

  ㄴ styles/
    ㄴ GlobalStyle.js
    ㄴ Theme.js

  ㄴ utils/
   ㄴ fetches.js

  ㄴ App.js
  ㄴ config.js
  ㄴ index.js
  
```

<br />
<h2>🧳 Packages</h2>

- CRA
- react-hooks
- styled-components
- styled-reset
