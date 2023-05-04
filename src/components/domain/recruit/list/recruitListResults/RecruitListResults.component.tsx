import SearchedList from '../searchedList/SearchedList.component';

import { Button, NoResult, Pagination } from '@/components/common';

import { RecruitListQueryModel as SearchFilter } from '@/types/recruit';

import * as S from './RecruitListResults.styled';
import { useRecruitListQuery } from '@/queries/recruit';

interface RecruitListResultsProps {
  filters: SearchFilter;
  handleResetFilter: () => void;
}

const RecruitListResults = ({ filters, handleResetFilter }: RecruitListResultsProps) => {
  const { data: searchedRecruitListData } = useRecruitListQuery(filters);

  return (
    <S.SearchResults>
      {searchedRecruitListData?.data?.length ? (
        <SearchedList data={searchedRecruitListData?.data} />
      ) : (
        <NoResult title="찾고 있는 검색 결과가 없어요.">
          <Button
            css={S.resetBtn}
            size="md"
            label="필터 초기화"
            variant="secondary"
            onClick={handleResetFilter}
          />
        </NoResult>
      )}
      {!!searchedRecruitListData?.data?.length && (
        <Pagination pageInfo={searchedRecruitListData?.page_result} />
      )}
    </S.SearchResults>
  );
};

export default RecruitListResults;
