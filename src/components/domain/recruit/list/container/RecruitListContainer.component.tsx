import dynamic from 'next/dynamic';

import { Suspense } from '@/libs';
import type { RecruitListQueryModel as SearchFilter } from '@/types/recruit';

import * as S from './RecruitListContainer.styled';

import { useSearchFilter } from '../hooks';

const FilterList = dynamic(() => import('../filterList/FilterList.component'), {
  suspense: true,
});

const RecruitList = dynamic(() => import('../recruitListResults/RecruitListResults.component'), {
  suspense: true,
});

const ListSkeleton = dynamic(() => import('@/components/common/list/List.skeleton'), {
  ssr: false,
});

const FilterListSkeleton = dynamic(() => import('../filterList/FilterList.skeleton'), {
  ssr: false,
});

interface RecruitListContainerProps {
  staticFilters: SearchFilter;
}

function RecruitListContainer({ staticFilters }: RecruitListContainerProps) {
  const { searchFilters, getFilterProps, handleResetFilter } = useSearchFilter(staticFilters);

  return (
    <S.RecruitListContainer>
      <S.A11yTitle>채용 공고</S.A11yTitle>
      <Suspense fallback={<FilterListSkeleton />}>
        <FilterList filters={searchFilters} {...getFilterProps()} />
      </Suspense>
      <Suspense fallback={<ListSkeleton count={6} hasTags />}>
        <RecruitList filters={searchFilters} handleResetFilter={handleResetFilter} />
      </Suspense>
    </S.RecruitListContainer>
  );
}

export default RecruitListContainer;
