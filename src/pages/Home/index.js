import {useState} from 'react';
import { Header } from '../../components/Header';
import './styles.css';
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList';



function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name){
      const {avatar_url, name, bio} = newUser;
      setCurrentUser({avatar_url, name, bio});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.lenght){
        setRepos(newRepos)
      }
    }
  }

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
            <input 
              name='usuario'
              placeholder='@username'
              value={user}
              onChange={event => setUser(event.target.value)}
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (
            <>
              <div className='perfil'>
                <img src="https://avatars.githubusercontent.com/u/62350916?s=96&v=4" className='profile' alt='User pic' />

                <div>
                  <h3>David Rocha</h3>
                  <span>@davidrockkj</span>
                  <p>Descrição</p>
                </div> 

              <hr />
              </div> {/* perfil */}
            </>
          ) : null}

          {repos?.lenght ? (
            <>
              <div>
                <h4 className='repositorio'>Repositórios</h4>
                <ItemList
                  title='Teste1'
                  description='tesde de descrição' />
              </div> {/* repositorios */}
            </>
          ) : null}
          
        </div> {/* info */}
      </div> {/* conteudo */}
    </div>
  );
}

export default App;
