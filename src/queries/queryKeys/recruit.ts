import type * as type from '@/types/recruit';

export const recruitKeys = {
  all: ['recruit'] as const,
  lists: () => [...recruitKeys.all, 'list'] as const,
  list: (filters: type.RecruitListQueryModel) => [...recruitKeys.lists(), { filters }] as const,
  details: () => [...recruitKeys.all, 'detail'] as const,
  detail: (id: string) => [...recruitKeys.details(), id] as const,
};
