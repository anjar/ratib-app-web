import { FunctionComponent } from "react";

import dynamic from 'next/dynamic';

const DarkModeButton = dynamic(() => import('./DarkModeButton' /* webpackChunkName: "dark-mode-button" */), {
  ssr: false,
});

const Header: FunctionComponent = () => {

  return (
    <header className="bg-teal-700 grid grid-cols-3 p-3">
      <div className="col-span-2">
sds
      </div>
      <div className="col-span-1 float-right flex justify-end">
        <DarkModeButton />
      </div>
    </header>
  );
}

export default Header;