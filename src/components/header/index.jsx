import Logo from '@/assets/logo.svg?react';
import MoonIcon from '@/assets/moon.svg?react';
import SunIcon from '@/assets/sun.svg?react';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="mw-1280 flex items-center justify-between pt-4 pb-1">
      <h1>
        <Logo className="h-auto w-24 text-black md:w-40 dark:text-white" />
      </h1>
      {/* 다크 모드 버튼 */}
      <button onClick={toggleDarkMode} className="p-2 dark:text-white">
        {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
      </button>
    </header>
  );
};

export default Header;
