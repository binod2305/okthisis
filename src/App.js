import React, { useState }from 'react';
import { Search } from './components/Search/Search';
import { Gallery } from './components/Images/Gallery';

function App() {
  const [input, setInput] = useState("");
  
  return (
    <div className="App">
      <center>
        <header className="App-header">
          <Search input = {input} setInput = {setInput}></Search>
          <Gallery query = {input} ></Gallery>
          {/* <Search></Search>
          <Gallery></Gallery> */}
        </header>
      </center>
    </div>
  );
}

export default App;
