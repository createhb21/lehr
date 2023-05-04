import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './FilterList.styled';

function FilterListSkeleton() {
  return (
    <S.FilterListContainer>
      <S.FilterList as="div">
        <Skeleton width={150} height={48} borderRadius={10} />
        <Skeleton width={150} height={48} borderRadius={10} />
      </S.FilterList>
    </S.FilterListContainer>
  );
}

export default FilterListSkeleton;
