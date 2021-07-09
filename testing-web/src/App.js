
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from './Theme/Header/Header';
import Contact from './Contact/Contact';
import SecondHeader from './Theme/SecondHeader/SecondHeader';

function App() {
  // const chunkSize = 10;
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  // const groups = arr.map((e, i) => {
  //   return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
  // }).filter(e => { return e; });
  // console.log({ arr, groups })
  // const data = require("./json/data-json.json")
  // var obj = data.results[0]
  // var objKey = Object.keys(obj)
  // var newKey = []

  // var res = Object.keys(obj).reduce((prev, curr, index) => {
  //   function isUpperCase(aCharacter) {
  //     return (aCharacter >= 'A') && (aCharacter <= 'Z');
  //   }
  //   function isUpper(str) {
  //     return (/[A-Z]/.test(str));
  //   }


  //   const firstAlphabet = objKey[index].substring(0, 1).toUpperCase()
  //   // var nextUpperCaseCharector = 0
  //   var firstWord = ""
  //   var nextWord = ""
  //   var newColKey = ""
  //   // console.log("isUpper(objKey[i]): ", isUpper(objKey[index]))
  //   if (isUpper(objKey[index])) {
  //     for (var j = 0; j < objKey[index].length; j++) {
  //       if (isUpperCase(objKey[index].charAt(j))) {
  //         // nextUpperCaseCharector = j
  //         nextWord = objKey[index].substring(j, (objKey[index].length))
  //         firstWord = objKey[index].substring(1, j)
  //         newColKey = firstAlphabet + firstWord + " " + nextWord
  //         console.log("newColKey-condition: ", newColKey)
  //       }
  //     }
  //   }
  //   else {
  //     newColKey = firstAlphabet + objKey[index].substring(1, (objKey[index].length))
  //     console.log("newColKey: ", newColKey)
  //     // break
  //   }
  //   // console.log(newColKey)

  //   return { ...prev, [newColKey]: obj[curr] }
  // }, {});
  // console.log("Res: ", res);
  // console.log("First res charector: ", res.fullName.substring(0, 1))






  return (
    <div>
      <Header />
      <SecondHeader />
      <Contact />


    </div>
  );
}

export default App;
