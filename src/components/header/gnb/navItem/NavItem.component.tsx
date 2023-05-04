import Link from 'next/link';

import * as S from './NavItem.styled';

interface NavItemProps {
  label: string;
  path: string;
  isTargetBlank?: boolean;
}

const NavItem = ({ label, path, isTargetBlank }: NavItemProps) => {
  return (
    <S.NavItem>
      <Link href={path} target={isTargetBlank ? '_blank' : ''}>
        <span>{label}</span>
      </Link>
    </S.NavItem>
  );
};

export default NavItem;
