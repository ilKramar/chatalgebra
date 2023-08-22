import {Component} from "react";
import React from "react";
import Messages from "./Messages";
import "../css/Input.css";


class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
    }
    else {
      this.setState({text: ""});
      this.props.onSendMessage(this.state.text);
    }
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Unesi svoju poruku"
            autofocus="true"
          />
          <button>Šalji</button>
        </form>
      </div>
    );
  }
}

export default Input;
