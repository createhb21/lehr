import favicon from 'public/favicon.ico';
import ogImage from 'public/images/ogImage.jpg';

import type { SEOProps } from '@/components/seo/SEO';

export const TITLE_TEMPLATE = ' | 고초대졸 닷컴';

export const DEFAULT_SEO_CONFIG: SEOProps = {
  title: '고초대졸 닷컴',
  description: '고초대졸 닷컴에서 다양한 채용 정보를 받아보세요',
  openGraph: {
    type: 'website',
    url: 'https://xn--299a59id5upfe.com',
    images: [{ url: ogImage.src, alt: '고초대졸 닷컴', width: 800, height: 400 }],
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0 minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: favicon.src,
    },
  ],
};
