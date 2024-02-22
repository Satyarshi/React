import React from "react";
import KgButton from './kgButton.jsx';
import NumberGenerator from "./random.jsx"; // to close the server after npm run dev press ctrl + c
function App(){
  return <div>
  <h1>Excited to learn react</h1>
  <h2>Thank you</h2>
  <KgButton />
  <NumberGenerator /> 
  <NumberGenerator />
  <NumberGenerator />
  <NumberGenerator />
  <NumberGenerator />
  <NumberGenerator />
  <NumberGenerator />  {/* using this we can define as much random number as we want using the same component */}
  </div>
}
export default App; // npm -> node package manager