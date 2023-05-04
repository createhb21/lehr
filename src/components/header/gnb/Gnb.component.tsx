import NavItem from './navItem/NavItem.component';
import * as S from './Gnb.styled';
import { NAV_MENU_LIST } from '@/constants/header';

const Gnb = () => {
  return (
    <S.Gnb>
      <S.MenuList>
        {NAV_MENU_LIST.header.map(({ label, href, isTargetBlank }) => (
          <NavItem key={label} label={label} path={href} isTargetBlank={isTargetBlank} />
        ))}
      </S.MenuList>
    </S.Gnb>
  );
};

export default Gnb;
