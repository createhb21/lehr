import type { GetServerSideProps, NextLayoutPage } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components';
import { RecruitListContainer } from '@/components/domain/recruit';

import type { Filter, Order, RecruitListQueryModel as SearchFilter } from '@/types/recruit';

interface RecruitingDetailPageProps {
  staticFilters?: SearchFilter;
}

const RecruitingSearchPage: NextLayoutPage = ({
  staticFilters = {} as SearchFilter,
}: RecruitingDetailPageProps) => {
  return <RecruitListContainer staticFilters={staticFilters} />;
};

RecruitingSearchPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query?.page || '';
  const size = query?.size || '';
  const order = query?.order || '';
  const filter = query?.filter || '';

  const staticFilters = {
    ...(size && { size: +size }),
    ...(page && { page: +page }),
    ...(order && { order: order as Order }),
    ...(filter && { filter: filter as Filter }),
  };

  return {
    props: {
      staticFilters,
    },
  };
};

export default RecruitingSearchPage;
