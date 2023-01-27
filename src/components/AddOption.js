import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined,
    input: ''
  };

  handleInput = (e) => {
    this.setState(() => ({ input: e.target.value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const optionEl = e.target.elements.option;
    const value = optionEl.value.trim();
    const error = this.props.addOption(value);
    if (error) {
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ 
        error: undefined, 
        input: ''
      }));
      optionEl.value = '';
    }
  };
  
  render() {
    return (
      <div className="c-add-option">
        { this.state.error && <p className="c-add-option__error">{this.state.error}</p> }
        <form className="c-add-option__form" onSubmit={this.handleSubmit}>
          <input onInput={this.handleInput} className="c-add-option__input" type="text" name="option" />
          <button disabled={!this.state.input.trim()} className="c-button" type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;