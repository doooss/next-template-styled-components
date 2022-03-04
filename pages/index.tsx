import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <div>
      Next js + typescript + styled-components 기본 템플릿 + FontAweSome Ver
      <br />
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default Home;
