import React from "react";
import Modal from "./Modal";

function DeleteModal(props) {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
     <div className="text-center chico">
       <h1 className="font_size">Are you sure?</h1>
       <p className="font_size">You are about to delete</p>
       <button onClick={props.onDelete} className="btn btn-danger font_size">Delete</button>
       <button onClick={props.onClose} className="btn btn-dark m-4 font_size">Cancel</button>
     </div>

    </Modal>
  );
}
export default DeleteModal;
