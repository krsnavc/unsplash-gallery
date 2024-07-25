import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function ThemeToggle() {
  const { toggleTheme, isDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;
