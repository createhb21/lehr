import Link from 'next/link';

import * as S from './List.styled';
import { PATH } from '@/constants';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListItemProps {
  className?: string;
  title: string;
  recruitId: number;
}

export const List = ({ className, children }: ListProps) => {
  return <ul className={className}>{children}</ul>;
};

List.Item = function ListItem({ className, title, recruitId }: ListItemProps) {
  return (
    <S.ListItem className={className}>
      <Link href={`${PATH.detail}/${recruitId}`} passHref>
        <S.AnchorWrapper>
          <S.Title>{title}</S.Title>
          <S.DescList>asd</S.DescList>
        </S.AnchorWrapper>
      </Link>
    </S.ListItem>
  );
};
