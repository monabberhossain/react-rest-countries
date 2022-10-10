import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Headers from './components/Headers/Headers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountries() {

//   const [countries, setCountries] = useState([]);

//   useEffect( () => {

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   }, []);

//   return (
//     <div>
//       <h1>Visiting Every Country of the World!!!</h1>
//       {
//         countries.map(country => <Country country={country.name.common}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Country: {props.country}</h2>
//     </div>
//   )
// }

export default App;
