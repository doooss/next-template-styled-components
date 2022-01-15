import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

const globalStyle = css`
  ${reset};

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
  html {
    font-size: 24px;
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.17rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.83rem;
  }
  h6 {
    font-size: 0.67rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    line-height: 160%;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
