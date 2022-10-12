
import close from "./close.png"

const songList = [{ songName: "Fireworks", artistName: "Katy Perry" }, { songName: "Despacito", artistName: "Luis Fonsi" }, { songName: "Fireworks", artistName: "Katy Perry" }]

function List() {
    return (
        <div class="List">
            {/* <!-- List Item 1 --> */}
            {songList.map((song, index) => (
                <ListItem id={index + 1} songName={song.songName} artistName={song.artistName}></ListItem>
            ))}
        </div>
    )
}

export default List;

function ListItem({ id, songName, artistName }) {
    return (
        <div class="list-item">
            <div class='item-primary-text item-number'>{id}</div>
            <div>
                <div class='item-primary-text'>{songName}</div>
                <div class='item-secondary-text'>{artistName}</div>
            </div>
            <div class='item-delete item-secondary-text'><img src={close} /></div>
        </div>
    )
}