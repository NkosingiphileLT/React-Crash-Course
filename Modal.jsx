import './Modal.css'

function Modal({CancelModel}){
  return(
<>
  <div className="modal">
    <p className="modal__title"></p>
    <div className="modal__buttons">
      <button className="btn btn__cancel" onClick={CancelModel}>Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</>

  );
}

export default Modal;
