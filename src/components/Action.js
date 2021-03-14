import React from 'react';

const Action = (props) => (
  <div>
    <button 
      className="c-button c-button--big"
      onClick={props.makeDecision} 
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;