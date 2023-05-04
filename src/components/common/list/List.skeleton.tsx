import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './List.styled';
import { useEffect, useState } from 'react';

interface ListSkeletonProps {
  className?: string;
  count: number;
  descCount?: number;
  hasTags?: boolean;
}

const ListSkeleton = ({
  className,
  count,
  descCount = 3,
  hasTags: tags = false,
}: ListSkeletonProps) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <S.ListItemSkeleton key={i} css={className}>
          {isDeferred && (
            <S.ContentSkeleton>
              <S.Title>
                <Skeleton css={S.titleSkeleton} />
              </S.Title>
              <S.DescList>
                {[...Array(descCount)].map((_, i) => (
                  <S.Desc key={i}>
                    <Skeleton width={85} />
                  </S.Desc>
                ))}
              </S.DescList>
              {tags && (
                <S.TagList>
                  <Skeleton width={65} height={28} borderRadius={10} />
                  <Skeleton width={65} height={28} borderRadius={10} />
                  <Skeleton width={65} height={28} borderRadius={10} />
                </S.TagList>
              )}
            </S.ContentSkeleton>
          )}
        </S.ListItemSkeleton>
      ))}
    </>
  );
};

export default ListSkeleton;
