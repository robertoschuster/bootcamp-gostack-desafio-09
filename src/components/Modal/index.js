import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles';

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <Container>
            <div className="modal-overlay" />
            <div
              className="modal-wrapper"
              aria-modal
              aria-hidden
              tabIndex={-1}
              role="dialog">
              <div className="modal">
                <div className="modal-header">
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                {children}
              </div>
            </div>
          </Container>
        </>,
        document.body
      )
    : null;

export default Modal;
