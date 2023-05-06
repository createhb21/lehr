/* eslint-disable @typescript-eslint/dot-notation */
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import type {
  KeyOf,
  ValueOf,
  SelectedFilterTag,
  RecruitListQueryModel as SearchFilter,
} from '@/types';

export const useSearchFilter = (staticFilters: SearchFilter) => {
  const router = useRouter();
  const { query } = router;

  const [searchFilters, setSearchFilters] = useState(staticFilters || query);

  const handleApplyFilter = useCallback(
    <K extends KeyOf<SearchFilter>>(name: K) =>
      (options: ValueOf<Pick<SearchFilter, K>>) => {
        const value = options;
        const query = { ...router.query };

        router.push(
          {
            pathname: router.pathname,
            query: { ...query, [name]: value },
          },
          undefined,
          { shallow: true },
        );
      },
    [query],
  );

  const handleDeleteTag = useCallback(
    (tag: SelectedFilterTag<SearchFilter, keyof SearchFilter>) => () => {
      const query = { ...router.query };
      delete query[tag.key];
      if (query?.page) delete query['page'];

      router.push(
        {
          pathname: router.pathname,
          query,
        },
        undefined,
        { shallow: true },
      );
    },
    [query],
  );

  const handleResetFilter = useCallback(() => {
    router.push(
      {
        pathname: router.pathname,
      },
      undefined,
      { shallow: true },
    );
  }, [query]);

  useEffect(() => {
    const query = { ...router.query };
    setSearchFilters(query);
  }, [query]);

  const getFilterProps = ({ ...otherProps } = {}) => ({
    handleApplyFilter,
    handleDeleteTag,
    handleResetFilter,
    ...otherProps,
  });

  return { searchFilters, getFilterProps, handleResetFilter };
};
