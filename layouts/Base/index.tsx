import { ReactNode, FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Footer from 'components/Footer';

type Props = {
  children?: ReactNode
};

const Header = dynamic(() => import('components/Header' /* webpackChunkName: "header" */));

const BaseLayout:FunctionComponent<Props> = ({ children } : Props) => (
  <>

    <Header />
    <main className="container mx-auto max-w-screen-sm">
      {children}
    </main>
    <Footer />

  </>
);
BaseLayout.defaultProps = {
  children: '',
};

export default BaseLayout;
