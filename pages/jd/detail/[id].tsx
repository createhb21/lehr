import { ReactElement } from 'react';
import type { GetServerSidePropsContext, NextLayoutPage } from 'next';

import { Layout } from '@/components';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { recruitKeys } from '@/queries/queryKeys';
import { fetchRecruitDetail } from '@/apis/recruit';
import { RecruitDetail } from '@/types/recruit';
import { RecruitDetailContainer } from '@/components/domain/recruit/detail';

interface RecruitingDetailPageProps {
  data?: RecruitDetail;
}

const RecruitingDetailPage: NextLayoutPage = ({ data }: RecruitingDetailPageProps) => {
  return <RecruitDetailContainer data={data} />;
};

RecruitingDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const recruitId = params?.id as string;

  const queryClient = new QueryClient();
  const res = await queryClient.fetchQuery(recruitKeys.detail(recruitId), () =>
    fetchRecruitDetail({ recruitId }),
  );

  return {
    props: {
      data: res.data,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default RecruitingDetailPage;
