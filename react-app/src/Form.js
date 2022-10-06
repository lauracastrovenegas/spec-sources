import './App.css';

function Form() {
    return (
        <form class="Form">
            <input class="form-input" type="text" id="name" placeholder="Song Title"></input>
            <input class="form-input" type="text" id="name" placeholder="Artist"></input>
            <button class="form-button">ADD</button>
        </form>
    )
}

export default Form;