import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {render} from 'react-dom'
import "../../css/styles.css"
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';




export const Search = ({input, setInput}) => {
    // const [input, setInput] = useState('');
    


    return (
      <DebounceInput
        type="text"
        name="photo_search"
        placeholder="Search Photos"
        className = "searchBox"
        minLength = {2}
        DebounceTimeout = {300}
        value = {input}
        onChange = {(e) => setInput(e.target.value ) }
        // onChange = {handleChange}
        >
        {/* <Button type = "submit" >Search</Button>  */}
  
       </DebounceInput>

    
      );

}

export default Search;
