import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div className="c-options">
    <div className="c-options__header">
      <div className="c-options__header-title">Your Options</div>
      <button disabled={props.options.length === 0} className="c-button c-button--link" onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
    <div className="c-options__body">
      {props.options.length === 0 && <p className="c-options__empty">Please add some options to get started!</p>}
      {
        props.options.map((option, index) => (
          <Option 
            key={option}
            optionNumber={index + 1} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}  
          />
        ))
      }
    </div>
  </div>
);

export default Options;