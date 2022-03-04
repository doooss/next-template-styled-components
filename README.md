# Next js + MUI + Emotion.js template 2022-03

MUI Emotion js 설정

Globalstyle, custom theme 즉시 적용하기 쉽게 세팅해놓음.


### Installation

```bash
  git clone -b mui --single-branch https://github.com/ldy9212/template.git
  cd nextjs-template
  npm i
```


### Globalstyle

```css

  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('/fonts/NotoSansKR-Medium') format('woff');
    font-weight: 500;
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('/fonts/NotoSansKR-Bold') format('woff');
    font-weight: 700;
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/fonts/Roboto-Medium') format('woff');
    font-weight: 500;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F,
      U+003A-0040, U+005B-0060, U+007B-007E;
  }
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/fonts/Roboto-Bold') format('woff');
    font-weight: 700;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F,
      U+003A-0040, U+005B-0060, U+007B-007E;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
   }
```

