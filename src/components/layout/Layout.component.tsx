import { Footer, Header } from '@/components';
import * as S from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
  footer?: boolean;
}

const Layout = ({ children, className, header = false, footer = false }: LayoutProps) => {
  return (
    <>
      {header && <Header />}
      <S.Main className={className} header={header} footer={footer}>
        {children}
      </S.Main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
