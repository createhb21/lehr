import { useState, useEffect } from 'react';

import { createPageList } from '@/utils/pagination';

import { useRouter } from 'next/router';

export const usePagination = (page: number, totalPages: number, maxPageCount: number) => {
  const router = useRouter();
  const { query } = router;

  const [currentPage, setCurrentPage] = useState<number>(page || 1);
  const [pageNumList, setPageNumList] = useState<number[]>(
    createPageList(currentPage, maxPageCount, totalPages),
  );

  const isDisabledPrev = currentPage - maxPageCount <= 0;

  const isDisabledNext =
    Math.floor((currentPage + maxPageCount - 1) / maxPageCount) >
    Math.floor(totalPages / maxPageCount);

  const handleFirstPage = () => {
    if (currentPage === 1) return;

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: String(1) },
    });
  };

  const handlePrevPage = () => {
    if (currentPage === 1) return;

    const prevPageNum = Math.max(
      maxPageCount * Math.floor((currentPage - maxPageCount - 1) / maxPageCount) + 1,
      1,
    );

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: String(prevPageNum) },
    });
  };

  const handleClickNum = (idx: number) => () => {
    if (currentPage === idx) return;

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: String(idx) },
    });
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) return;

    const nextPageNum = Math.min(
      Math.floor((currentPage + maxPageCount - 1) / maxPageCount) * maxPageCount + 1,
      totalPages,
    );

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: String(nextPageNum) },
    });
  };

  const handleLastPage = () => {
    if (currentPage === totalPages) return;

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: String(totalPages) },
    });
  };

  useEffect(() => {
    setCurrentPage(Number(query?.page) || 1);
  }, [query?.page]);

  useEffect(() => {
    setPageNumList(createPageList(currentPage, maxPageCount, totalPages));
  }, [currentPage, maxPageCount, totalPages]);

  return {
    currentPage,
    pageNumList,
    isDisabledPrev,
    isDisabledNext,
    handlePrevPage,
    handleFirstPage,
    handleNextPage,
    handleLastPage,
    handleClickNum,
  };
};
