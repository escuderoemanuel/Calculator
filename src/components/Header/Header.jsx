import './Header.css';
import appIcon from '../../assets/images/calculator.png';

export const Header = () => {
  return (
    <section className='header'>
      <div className='titleHeader'>
        <img className='appIcon' src={appIcon} alt='Calculator Icon' />
        <h1 className='titleApp'>
          <span className='spanCalculator'>Calculator</span>
          <span className='spanSign'>!</span>
        </h1>
      </div>
    </section>
  );
};
