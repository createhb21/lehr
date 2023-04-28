import { ReactElement } from 'react';
import type { NextLayoutPage } from 'next';

import { Layout } from '@/components';

const RecruitingDetailPage: NextLayoutPage = () => {
  return <>RecruitingDetailPage</>;
};

RecruitingDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  );
};

export default RecruitingDetailPage;
