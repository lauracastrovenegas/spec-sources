import './App.css';
import React, {useState} from 'react';

function Form({handleAdd}) {
    const [songTitle, setSongTitle] = useState("");
    const [artistName, setArtistName] = useState("");

    return (
        <form class="Form">
            <input class="form-input" type="text" id="name" placeholder="Song Title" onChange={(e) => setSongTitle(e.target.value)}></input>
            <input class="form-input" type="text" id="name" placeholder="Artist" onChange={(e) => setArtistName(e.target.value)}></input>
            <button class="form-button" type="button" onClick={() => handleAdd(songTitle, artistName)}>ADD</button>
        </form>
    )
}

export default Form;