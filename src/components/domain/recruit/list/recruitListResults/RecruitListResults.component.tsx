import Link from 'next/link';

import { RecruitListQueryModel } from '@/types/recruit';
import { useRecruitListQuery } from '@/queries/recruit';
import { Pagination } from '@/components/common/pagination';
import * as S from './RecruitListResults.styled';

interface RecruitListResultsProps {
  filters: RecruitListQueryModel;
}

const RecruitListResults = ({ filters }: RecruitListResultsProps) => {
  const { data: searchedRecruitListData } = useRecruitListQuery(filters);

  return (
    <>
      <S.List>
        {searchedRecruitListData?.data?.map((item) => {
          return (
            <S.Item key={item.id}>
              <Link href={`/jd/detail/${item.id}`}>
                <h2>{item?.company?.name}</h2>
                <strong>{item?.title}</strong>
              </Link>
            </S.Item>
          );
        })}
      </S.List>
      <Pagination pageInfo={searchedRecruitListData?.page_result} />
    </>
  );
};

export default RecruitListResults;
