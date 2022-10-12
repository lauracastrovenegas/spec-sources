import './App.css';
import Form from './Form';
import List from './List';
import React, {useState} from 'react';

const initialList = [{ songName: "Fireworks", artistName: "Katy Perry" }, { songName: "Despacito", artistName: "Luis Fonsi" }, { songName: "Fireworks", artistName: "Katy Perry" }]

function App() {
  const [songList, setSongList] = useState(initialList);

  function handleDelete(songIndex) {
    const updatedList = songList.slice(0, songIndex).concat(songList.slice(songIndex + 1));

    setSongList(updatedList);
  }

  function handleAdd(songTitle, artistName) {
    // const updatedList = songList.concat([{songName: songTitle, artistName: artistName}])
    const updatedList = [...songList, {songName: songTitle, artistName: artistName}]

    setSongList(updatedList);
  }
  
  return (
    <div class="App">
        <div class="Header">My Favorite Songs</div>
        <Form handleAdd={handleAdd}></Form>
        <List songList={songList} handleDelete={handleDelete}></List>
    </div>
  );
}

export default App;
