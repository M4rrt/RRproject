import logo from './logo.svg';
import './App.css';

const welcome = {
  greeting: "Hey",
  name: "M4rtt"
}

const list = [
  {
    title: 'Facebook',
    url: 'https://facebook.com',
    autor: 'meta',
    num_coments: '1000',
    objectId: '0',
  },
  {
    title: 'youtube',
    url: 'https://youtube.com',
    autor: 'google',
    num_coments: '200',
    objectId: '1',
  }
]

const numbers = [1,4,8,10]

const newNumbers= numbers.map(function(number){
  return number * 2
})

function App() {
  const titulo = "M4rtt";
  return (
    <div className="App">
      <img src={logo} alt={titulo} />
      <h1>{welcome.greeting} <b>{welcome.name}</b></h1>
      
      
      <label htmlFor="search"> Search </label>
      <input id="search" type="text"></input>

      {list.map(function(item){
        return (
        <div id={item.objectId}>
          <h1>
          {item.title}
          </h1>
          <span>
            <a target="_blank" href={item.url} rel="noreferrer">Site</a>
          </span><br/>
          <span>{item.autor}</span> <br/>
          <span>{item.num_coments}</span>
        </div>
        );})}
    </div>
  );
}

export default App;
