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

const List = () =>
  list.map(function (item){
    return(
      <div key={item.objectId}>
        <span>
          <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
        </span>
        <br/>
        <span>
          Empresa: {item.autor}
        </span>
          <br/>
        <span>
          {item.num_coments}
        </span>
      </div>
    )
  })

const Search = () => 
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text"></input>
    </div>

function App() {
  const titulo = "M4rtt";
  return (
    <div className="App">
      <img src={logo} alt={titulo} />
      <h1>{welcome.greeting} <b>{welcome.name}</b></h1>
      
      
      <Search/>

      <List/>
    </div>
  );
}

export default App;
