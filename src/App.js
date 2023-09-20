import './App.css';
import Accreditation from './Components/Accreditation';
import Footer from './Components/Footer';
import Formcomponent from './Components/Formcomponents';
import Midbuttons from './Components/Midbuttons';
import Midcards from './Components/Midcards';
import Navbar from './Components/Navbar';
import PictureComponent from './Components/PictureComponent';
import Pricebar from './Components/Pricebar';
import Whychooseus from './Components/Whychooseus';
import Womanimg from './Components/Womanimg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Formcomponent/>
      <PictureComponent/>
      <Pricebar/>
      <Accreditation/>
      <Midbuttons/>
      <Midcards/>
      <Whychooseus/>
      <Womanimg/>
      <Footer/>
    </div>
  );
}

export default App;
