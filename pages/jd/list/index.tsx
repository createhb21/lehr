import { ReactElement } from 'react';
import type { NextLayoutPage } from 'next';

import { Layout } from '@/components';

const RecruitingSearchPage: NextLayoutPage = () => {
  return <>RecruitingSearchPage</>;
};

RecruitingSearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  );
};

export default RecruitingSearchPage;
