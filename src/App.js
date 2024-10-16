
import './App.css';

const filmes = {
  Search: [
    {
      Title: 'Planet of apes',
      Year: '2001',
      Poster: 'https://m.media-amazon.com/images/M/MV5BZDRlZTc3YTItOTk3Yi00NmU4LWFiOGUtNjgwMDZjNjIzNTU1XkEyXkFqcGc@._V1_.jpg',
    },
    {
      Title: 'Constantine',
      Year: '2005',
      Poster: 'https://br.web.img3.acsta.net/c_310_420/pictures/210/163/21016319_20130627174102758.jpg',
    },
    {
      Title: 'Alien Romulus',
      Year: '2024',
      Poster: 'https://br.web.img3.acsta.net/img/af/d3/afd330bc4c617786bd0e2ac199487c80.PNG',
    },
    {
      Title: 'The Conjuring',
      Year: '2013',
      Poster: 'https://upload.wikimedia.org/wikipedia/pt/a/ac/The_Conjuring.jpg',
    },
    {
      Title: 'Forrest Gump',
      Year: '1994',
      Poster: 'https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg',
    },
    {
      Title: 'Drive',
      Year: '2012',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYTFmNTFlOTAtNzEyNi00MWU2LTg3MGEtYjA2NWY3MDliNjlkXkEyXkFqcGc@._V1_.jpg',
    },
 ]
}


function App() {
  return (
    <div className="App">
      <div className='boxFilmes'>
       <h2>Buscar filmes: </h2>
       <form>
        <input placeholder='Digite o nome do filme...'></input>
        <button type='submit'>Buscar</button>
       </form>
       <div className='filmesGrid'>
        {filmes.Search.map((filme) => (
        <div className='filmesCard'>
          <h3>{filme.Title}</h3>
          <img src={filme.Poster}></img>
          <p>Ano: {filme.Year}</p>
        </div>
        ))}
        </div>
       </div>
      </div>
  );
}


export default App;
