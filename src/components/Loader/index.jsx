import Loader from 'react-loader-spinner';
import style from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={style.loader}>
      <Loader
        type="Bars"
        heigth="100"
        width="100"
        color="#31ee1f"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};
export default Spinner;
