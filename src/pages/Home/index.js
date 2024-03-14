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
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscar</button>
          </div>

          <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/62350916?s=96&v=4" className='profile' alt='User pic' />

            <div>
              <h3>David Rocha</h3>
              <span>@davidrockkj</span>
              <p>Descrição</p>
            </div>

          </div> {/* perfil */}
          <hr />
          <div>
            <h4>Repositórios</h4>
          </div> {/* repositorios */}
        </div> {/* info */}
      </div> {/* conteudo */}
    </div>
  );
}

export default App;
