import type { GetServerSidePropsContext, GetStaticPaths, NextLayoutPage } from 'next';
import { ReactElement } from 'react';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import { Layout } from '@/components';
import { RecruitDetailContainer } from '@/components/domain/recruit/detail';

import { fetchRecruitDetail } from '@/apis/recruit';
import { recruitKeys } from '@/queries/queryKeys';

const RecruitingDetailPage: NextLayoutPage = () => {
  return <RecruitDetailContainer />;
};

RecruitingDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  );
};

const REVALIDATE_SECONDS = 1000 * 60 * 10; // 10분

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const recruitId = params?.id as string;

  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(recruitKeys.detail(recruitId), () =>
      fetchRecruitDetail({ recruitId }),
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch (e) {
    return {
      notFound: true,
      revalidate: 500,
    };
  }
};

export default RecruitingDetailPage;
