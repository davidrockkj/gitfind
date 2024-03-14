import './styles.css';
import background from '../../assets/background.png';

const Header = () => {
  return (
    <header>
      <h1>GitFind</h1>
      <div className='conteudo'>
        <img
          src={background}
          alt='background'
          className='background'
        />
      </div>
    </header>
  )
}

export { Header };