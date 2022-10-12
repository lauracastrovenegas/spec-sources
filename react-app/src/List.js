import close from "./close.png"

function List({songList, handleDelete}) {
    return (
        <div class="List">
            {/* <!-- List Item 1 --> */}
            {songList.map((song, index) => (
                <ListItem id={index} songName={song.songName} artistName={song.artistName} handleDelete={handleDelete}></ListItem>
            ))}
        </div>
    )
}

export default List;

function ListItem({ id, songName, artistName, handleDelete }) {
    return (
        <div class="list-item">
            <div class='item-primary-text item-number'>{id + 1}</div>
            <div>
                <div class='item-primary-text'>{songName}</div>
                <div class='item-secondary-text'>{artistName}</div>
            </div>
            <div class='item-delete item-secondary-text' onClick={() => handleDelete(id)}><img src={close} /></div>
        </div>
    )
}