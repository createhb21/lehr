import { usePagination } from '@/hooks';

import type { PageInfo } from '@/types/common';

import * as S from './Pagination.styled';

interface PaginationProps {
  pageInfo?: PageInfo;
  maxPageCount?: number;
  hasDoubleBtn?: boolean;
}

export const Pagination = ({
  pageInfo = {} as PageInfo,
  maxPageCount = 9,
  hasDoubleBtn = true,
}: PaginationProps) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { page, total_pages } = pageInfo;

  const {
    currentPage,
    pageNumList,
    isDisabledPrev,
    isDisabledNext,
    handlePrevPage,
    handleFirstPage,
    handleClickNum,
    handleNextPage,
    handleLastPage,
  } = usePagination(page, total_pages, maxPageCount);

  return (
    <S.Pagination>
      <S.Wrapper>
        {hasDoubleBtn && (
          <S.ArrowBtn type="button" disabled={isDisabledPrev} onClick={handleFirstPage}>
            <S.ArrowDoubleLeftIcon />
          </S.ArrowBtn>
        )}
        <S.ArrowBtn type="button" disabled={isDisabledPrev} onClick={handlePrevPage}>
          <S.ArrowLeftIcon />
        </S.ArrowBtn>
        <S.NumWrapper>
          {pageNumList.map((num) => (
            <S.NumBtn
              key={num}
              type="button"
              isSizeLg={String(num).length > 3}
              isCurrentPage={currentPage === num}
              onClick={handleClickNum(num)}
            >
              {num}
            </S.NumBtn>
          ))}
        </S.NumWrapper>
        <S.ArrowBtn type="button" disabled={isDisabledNext} onClick={handleNextPage}>
          <S.ArrowRightIcon />
        </S.ArrowBtn>
        {hasDoubleBtn && (
          <S.ArrowBtn type="button" disabled={isDisabledNext} onClick={handleLastPage}>
            <S.ArrowDoubleRightIcon />
          </S.ArrowBtn>
        )}
      </S.Wrapper>
    </S.Pagination>
  );
};
