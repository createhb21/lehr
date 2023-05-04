import * as S from './Header.styled';
import Gnb from './gnb/Gnb.component';

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Gnb />
      </S.Container>
    </S.Header>
  );
};

export default Header;
