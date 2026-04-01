import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';
import Mainsection from './components/Main/Mainsection';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stats />
      <Mainsection />
    </div>
  );
}

export default App;