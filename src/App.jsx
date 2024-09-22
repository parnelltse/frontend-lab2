import { artists } from './best-selling-music-artists';
import ArtistList from './components/ArtistList';

function App() {
  return (
    <div className="app">
      <h1>Best Selling Music Artist</h1>
      <ArtistList artists={artists} />
    </div>
  );
}

export default App;
