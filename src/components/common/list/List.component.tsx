import Link from 'next/link';

import * as S from './List.styled';
import { PATH } from '@/constants';
import Image from 'next/image';
import { getCurrentDateTime } from '@/utils/getCurrentDateTime';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListItemProps {
  className?: string;
  view: number;
  title: string;
  endTime: string;
  bookmark: number;
  recruitId: number;
  companyName: string;
  createdTime: string;
  companyThumbnail: string;
}

export const List = ({ className, children }: ListProps) => {
  return <ul className={className}>{children}</ul>;
};

List.Item = function ListItem({
  className,
  recruitId,
  title,
  companyName,
  companyThumbnail,
  view,
  bookmark,
  createdTime,
  endTime,
}: ListItemProps) {
  return (
    <S.ListItem className={className}>
      <Link href={`${PATH.detail}/${recruitId}`} passHref>
        <S.AnchorWrapper>
          <Image src={companyThumbnail} alt="" width={80} height={80} />
          <S.DescList>
            <S.Title>{title}</S.Title>
            <strong>{companyName}</strong>
            <span>채용 시작일 {getCurrentDateTime(createdTime)}</span>
            <br />
            <span>채용 마감일 {getCurrentDateTime(endTime)}</span>
            <span>{bookmark}</span>
            <span>{view}</span>
          </S.DescList>
        </S.AnchorWrapper>
      </Link>
    </S.ListItem>
  );
};
