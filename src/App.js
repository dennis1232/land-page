import logo from './logo.svg';
import './App.css';

const  App=()=> {
  return (
    <div className="app">
    <div className='container'>
    <img className='logo' src={logo}/>
   <a className="link" href="https://spoti.fi/3cajJIY" >Spotify</a>
   <a className="link" href="https://apple.co/3nbcuGM" >Apple Music</a>
   <a className="link" href="https://apple.co/3nbcuGM" >Youtube</a>
   <a className="link" href="https://apple.co/3nbcuGM" >Instagram</a>
    </div>
    </div>
  );
}

export default App;
