
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from './Theme/Header/Header';
import Contact from './Contact/Contact';
import SecondHeader from './Theme/SecondHeader/SecondHeader';

function App() {
  const data = require("./json/data-json.json")
  var obj =data.results[0]
  // var res = Object.keys(obj).reduce((prev, curr, index) => { return {...prev, ['string '+(index+1)]: obj[curr]}}, {});
  // console.log(res);
  // console.log(obj.fullName.substring(0,1))

  
  return (
    <div>
      <Header/>
      <SecondHeader/>
      <Contact/>
        
      
    </div>
  );
}

export default App;
