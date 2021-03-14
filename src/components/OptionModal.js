import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.closeModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="c-modal"
  >
    <div className="c-modal__content">
      <h3 className="c-modal__title">Selected Option</h3>
      {props.selectedOption && <p className="c-modal__option">{props.selectedOption}</p>}
      <button className="c-button" onClick={props.closeModal}>Okay</button>
    </div>
  </Modal>
);

export default OptionModal;