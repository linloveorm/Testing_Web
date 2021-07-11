
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact/Contact';
import Header from './Theme/Header/Header';
import SecondHeader from './Theme/SecondHeader/SecondHeader';

function App() {
  return (
    <div>
      <Header />
      <SecondHeader />
      <Contact />
    </div>
  );
}

export default App;
