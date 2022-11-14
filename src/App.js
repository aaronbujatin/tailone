import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Cards from './components/Cards';
import Whatwedo from './components/Whatwedo';
import Ourwork from './components/Ourwork';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Whatwedo/>
      <Ourwork/>
      <Cards />
    </div>
  );
}

export default App;
