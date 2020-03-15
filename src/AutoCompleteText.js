import React, { Component } from "react";
import "./AutoCompleteText.css";

class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
    this.items = ["David", "Damien", "Sara", "Jane"];
  }

  onTextChanged = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(item => regex.test(item));
    }
    this.setState({ suggestions, text: value });
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li key={item} onClick={() => this.suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  suggestionSelected(value) {
    this.setState({ text: value, suggestions: [] });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="AutoCompleteText">
        <input value={text} onChange={this.onTextChanged} type="text" />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompleteText;
