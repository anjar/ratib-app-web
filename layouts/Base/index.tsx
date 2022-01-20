import { ReactNode, FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Footer from 'components/Footer';

type Props = {
  children?: ReactNode
};

const Header = dynamic(() => import('components/Header' /* webpackChunkName: "header" */));
const Navbar = dynamic(() => import('components/Navbar' /* webpackChunkName: "navbar" */));

const BaseLayout:FunctionComponent<Props> = ({ children } : Props) => (
  <div className="container mx-auto max-w-screen-sm">

    <Header />
    <main >
      {children}
    </main>
    <Navbar />

  </div>
);
BaseLayout.defaultProps = {
  children: '',
};

export default BaseLayout;
