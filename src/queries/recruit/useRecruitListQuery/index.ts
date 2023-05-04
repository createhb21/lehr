import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { Filter, Order, StandardResponseModel } from '@/types';
import * as type from '@/types/recruit';

import * as api from '@/apis/recruit';
import { recruitKeys } from '@/queries/queryKeys/recruit';

export const useRecruitListQuery = (
  filters: type.RecruitListQueryModel,
): UseQueryResult<Pick<StandardResponseModel<type.RecruitOverview[]>, 'data' | 'page_result'>> => {
  const reqParams = {
    ...(filters?.size && { size: filters?.size }),
    ...(filters?.page && { page: filters?.page }),
    ...(filters?.order && { order: filters?.order as Order }),
    ...(filters?.filter && { filter: filters?.filter as Filter }),
  };

  return useQuery(recruitKeys.list(reqParams), () => api.fetchRecruitList(reqParams), {
    select: ({ data, page_result }) => ({
      data,
      page_result,
    }),
  });
};
