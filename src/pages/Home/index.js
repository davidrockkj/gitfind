import { Header } from '../../components/Header';
import './styles.css';
import background from '../../assets/background.png';




function App() {
  return (
    <div className="App">
      <Header />
      <img
          src={background}
          alt='background'
          className='background'
        />
    </div>
  );
}

export default App;
