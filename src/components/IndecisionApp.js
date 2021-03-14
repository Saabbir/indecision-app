import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  makeDecision = () => {
    const randNmbr = Math.floor(Math.random() * this.state.options.length);
    this.setState((prevState) => ({ 
      selectedOption:  prevState.options[randNmbr]
    }))
  };

  closeModal = () => {
    this.setState(() => ({ selectedOption:  undefined }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }))
  };

  addOption = (option) => {
    if (!option) {
      return 'Please add some text';
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option \`${option}\` already exists.`;
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
  
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if( prevState.options.length !== this.state.options.length ) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life on a hands of a computer';
    return (
      <div className="l-page-wrapper">
        <Header title={title} subtitle={subtitle} />
        <div className="l-content-wrap">
          <Action makeDecision={this.makeDecision} hasOptions={this.state.options.length > 0} />
          <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption addOption={this.addOption} />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;