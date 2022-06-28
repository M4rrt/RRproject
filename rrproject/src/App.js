import logo from './logo.svg';
import './App.css';

const welcome = {
  greeting: "Hey",
  name: "M4rtt"
}

const list = [
  {
    title: 'Facebook',
    url: 'facebook.com.br',
    autor: 'meta',
    num_coments: '1000',
    objectId: '0',
  },
  {
    title: 'youtube',
    url: 'youtube.com.br',
    autor: 'google',
    num_coments: '200',
    objectId: '1',
  }
]

function App() {
  const titulo = "M4rtt";
  return (
    <div className="App">
      <img src={logo} alt="" />
      <h1>{welcome.greeting} <b>{welcome.name}</b></h1>
      
      
      <label htmlFor="search"> Search </label>
      <input id="search" type="text"></input>
    </div>
  );
}

export default App;
