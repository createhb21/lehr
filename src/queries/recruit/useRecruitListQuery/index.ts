import { recruitKeys } from '@/queries/queryKeys/recruit';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

import * as api from '@/apis/recruit';
import * as type from '@/types/recruit';

export const useRecruitListQuery = (
  filters: type.RecruitListQueryModel,
): UseQueryResult<Pick<type.RecruitListServerModel, 'data' | 'page_result'>> => {
  const reqParams = {
    page: filters?.page || 1,
    size: filters?.size || 6,
    order: filters?.order || 'recent',
    ...(filters?.filter && { filter: filters.filter }),
  };

  return useQuery(recruitKeys.list(filters), () => api.fetchRecruitList(reqParams), {
    select: ({ data, page_result }) => ({
      data,
      page_result,
    }),
  });
};
