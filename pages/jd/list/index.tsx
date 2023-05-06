import type { GetServerSideProps, NextLayoutPage } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components';
import { RecruitListContainer } from '@/components/domain/recruit';

import type { Filter, Order, RecruitListQueryModel as SearchFilter } from '@/types/recruit';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { recruitKeys } from '@/queries/queryKeys';
import { fetchRecruitList } from '@/apis';

interface RecruitingDetailPageProps {
  staticFilters?: SearchFilter;
}

const RecruitingSearchPage: NextLayoutPage = ({
  staticFilters = {} as SearchFilter,
}: RecruitingDetailPageProps) => {
  return <RecruitListContainer staticFilters={staticFilters} />;
};

RecruitingSearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  );
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

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(recruitKeys.list(staticFilters), () =>
    fetchRecruitList(staticFilters),
  );

  return {
    props: {
      staticFilters,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default RecruitingSearchPage;
