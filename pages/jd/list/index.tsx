import { ReactElement } from 'react';
import type { GetServerSidePropsContext, NextLayoutPage } from 'next';

import { Layout } from '@/components';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { recruitKeys } from '@/queries/queryKeys';
import { Filter, Order, RecruitListQueryModel } from '@/types/recruit';
import { fetchRecruitList } from '@/apis/recruit';
import { RecruitListContainer } from '@/components/domain/recruit';

interface RecruitingDetailPageProps {
  filters?: RecruitListQueryModel;
}

const RecruitingSearchPage: NextLayoutPage = ({
  filters = {} as RecruitListQueryModel,
}: RecruitingDetailPageProps) => {
  return <RecruitListContainer filters={filters} />;
};

RecruitingSearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const size = query?.size || '';
  const page = query?.page || '';
  const order = query?.order || '';
  const filter = query?.filter || '';

  const searchedRecruitingFilter = {
    ...(size && { size: +size }),
    ...(page && { page: +page }),
    ...(order && { order: order as Order }),
    ...(filter && { filter: filter as Filter }),
  };

  const queryClient = new QueryClient();
  await queryClient.fetchQuery(recruitKeys.list(searchedRecruitingFilter), () =>
    fetchRecruitList(searchedRecruitingFilter),
  );

  return {
    props: {
      filters: searchedRecruitingFilter,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default RecruitingSearchPage;
