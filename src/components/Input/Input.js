import React from "react";
import "./Input.css";


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: "" }
    }
    update = (event) => {
        this.setState({inputValue: event.target.value})
    }
    enter = (event) => {
        if(event.keyCode === 13 && this.state.inputValue !== ""){
            this.props.inputPressedEnter(this.state.inputValue);
        } 
    }
    button = (event) => {
        this.props.inputPressedEnter(this.state.inputValue);
    }
    render() {
        return(
            <div class="sumit-container">
                <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} class="input" type="text" placeholder="Add a song!"></input>
                <button onClick={this.button} value="sumit" class="button">sumit</button>
            </div>
        );
    }
}
export default Input;