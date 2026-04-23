import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button
        variant="danger"
        size="sm"
        onClick={(evt) => {
          handleShow();
          props.getList(evt, props.elementId);
        }}
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this book?</p>
          <label className="form-label">Book Title</label>
          <input
            type="text"
            name="title"
            value={props.singledata.title}
            disabled={true}
            className="form-control mb-3"
          />
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            value={props.singledata.author}
            disabled={true}
            className="form-control mb-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={(event) => {
              handleClose();
              props.deleteList(event, props.elementId);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteList;
