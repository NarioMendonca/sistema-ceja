import Styles from './authPageLayout.module.scss';
import { Outlet } from 'react-router-dom';

export const AuthPageLayout: React.FC = () => {
  return (
    <div className={Styles.pageContainer}>
      <header>
        <h1>CEJA</h1>
      </header>
      <Outlet />
      <footer></footer>
    </div >
  );
};