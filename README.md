<h1> ๐ฅ Infinite Scroll ์์ </h1>

![infiniteScroll](https://user-images.githubusercontent.com/45257139/127225478-75bbe0e2-68a7-4efa-a9fd-1c6960b8f210.gif)
          

<br />
<h2>๐ ๊ณผ์  ๊ตฌํ ๋ชฉ๋ก</h2>

- ๋ฌดํ ์คํฌ๋กค ๊ตฌํ
  - Intersection Observer ์ปค์คํ ํ์ ์ฌ์ฉํ ๋ฌดํ ์คํฌ๋กค ๊ธฐ๋ฅ ๊ตฌํ
  - ์คํฌ๋กค์ด ์ค๊ฐ ์ฏค ๋ด๋ ค์์ ๋ API์์ฒญ (๋ฐ์ดํฐ๊ฐ ๋๊ธฐ์ง ์๊ณ  ๋ ๋๋ง๋๊ธฐ ์ํจ)
  - ๋ง์ง๋ง page ๋๋ฌ ํ(fetch์ ์๋ต๊ฐ์ด ๋น ๋ฐฐ์ด์ธ ๊ฒฝ์ฐ) ๋ค์ ์์ฒญ์ ํ์ง ์๋๋ก ๋ถ๊ธฐ ์ฒ๋ฆฌ ๋ฐ 'loading...'๋ณด์ด์ง ์๋๋ก ํจ

![51๊น์ง๋ง](https://user-images.githubusercontent.com/45257139/127225600-0f6cd462-fbd0-4822-98bc-fb98efafe508.PNG)

<br />
<h2> ๐ฏโโ๏ธ ํ์</h2>

- [๋ผ๋๋ฒ ๋ฅด ๊น๋จ์ฃผ](https://github.com/skawnkk?tab=repositories)
- [์  ์ข ์๊ณ ์ถ์ ๋ฐํ์ฐฌ](https://github.com/Eyes0n)

<br />
<h2>โ๏ธ ์ค์น ๋ฐ ์คํ</h2>

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
<h2>๐งฌ ํ๋ก์ ํธ ๊ตฌ์กฐ </h2>

```html
  src/
  ใด components/
    ใด Card.js
    ใด InfiniteCardList.js

  ใด hook/
    ใด useObserver.js

  ใด styles/
    ใด GlobalStyle.js
    ใด Theme.js

  ใด utils/
   ใด fetches.js

  ใด App.js
  ใด config.js
  ใด index.js
  
```

<br />
<h2>๐งณ Packages</h2>

- CRA
- react-hooks
- styled-components
- styled-reset
