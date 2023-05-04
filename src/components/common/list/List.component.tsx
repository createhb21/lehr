import Link from 'next/link';

import * as S from './List.styled';
import { DEFAULT_THUMBNAIL_IMAGE, PATH } from '@/constants';
import NextImage from 'next/image';
import { getCurrentDateTime } from '@/utils/getCurrentDateTime';
import { BookmarkIcon, ViewIcon } from '@/assets/icons';

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
  return <S.List className={className}>{children}</S.List>;
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
          <S.Image>
            <NextImage src={companyThumbnail || DEFAULT_THUMBNAIL_IMAGE} alt="" fill />
          </S.Image>
          <S.DescList>
            <S.TimeDesc>
              {getCurrentDateTime(createdTime)}~{getCurrentDateTime(endTime)}
            </S.TimeDesc>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Title>{title}</S.Title>
            <S.FloatDesc>
              <S.IconDesc>
                <BookmarkIcon /> {bookmark}
              </S.IconDesc>
              <S.IconDesc>
                <ViewIcon />
                {view}
              </S.IconDesc>
            </S.FloatDesc>
          </S.DescList>
        </S.AnchorWrapper>
      </Link>
    </S.ListItem>
  );
};
