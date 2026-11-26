import './App.css';
import Header from './layouts/Header'
import Hero from './pages/Home/components/Hero';
import Footer from './layouts/Footer'
import Tracks from './pages/Home/components/Tracks';
import Coaches from './pages/Home/components/Coaches';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Tracks/>
      <Coaches/>
      <Footer/>
    </div>
  );
}

export default App;
