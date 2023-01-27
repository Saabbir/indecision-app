import React from 'react';

const Option = (props) => (
  <div className="c-option">
    <div className="c-option__left">
      <span className="c-option__number">{ props.optionNumber }.</span>
      <span className="c-option__text">{ props.optionText }</span>
    </div>
    <button
      className="c-button c-button--link" 
      onClick={(e) => props.handleDeleteOption(props.optionText)}
    >
      Remove
    </button>
  </div>
);

export default Option;