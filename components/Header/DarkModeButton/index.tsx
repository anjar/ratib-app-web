// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faMoon, faSun,
// } from '@fortawesome/free-solid-svg-icons';

// @emotion-icons/bootstrap/SunFill
import {SunFill, MoonFill} from '@emotion-icons/bootstrap'

import { useTheme } from 'next-themes';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <button type="button" className="px-2 border rounded-lg border-gray-300 dark:border-gray-500" onClick={handleClick}>
        {theme === 'dark'
          ? <SunFill size={26} />
          : <MoonFill size={26} className="text-gray-700" />}
      </button>
    </>
  );
};

export default DarkModeButton;
