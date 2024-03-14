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
            
        </div>
      </div>
    </div>
  );
}

export default App;
