import { Header } from '../../components/Header';
import './styles.css';
import background from '../../assets/background.png';




function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>

        <img
            src={background}
            alt='background'
            className='background'
          />

        <div className='info'>
          <input name='usuario' placeholder='@username' />
          <button>Buscar</button>
        </div>

        <div className='perfil'>
          <img src="https://avatars.githubusercontent.com/u/62350916?s=96&v=4" className='profile' alt='User pic' />

          <div>
            <h3>David Rocha</h3>
            <p>Descrição</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
