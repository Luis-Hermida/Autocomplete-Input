import React, { Component } from "react";

class HideableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleIsHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleIsHidden()}>Toggle</button>
        {this.state.isHidden ? "" : this.props.text}
      </div>
    );
  }
}

export default HideableText;
