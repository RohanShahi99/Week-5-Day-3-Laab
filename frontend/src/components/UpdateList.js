import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function UpdateList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button
        variant="warning"
        size="sm"
        onClick={(evt) => {
          handleShow();
          props.getList(evt, props.elementId);
        }}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="form-label">Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            name="title"
            value={props.singledata.title}
            onChange={props.handleChange}
            className="form-control mb-3"
          />
          <label className="form-label">Author</label>
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={props.singledata.author}
            onChange={props.handleChange}
            className="form-control mb-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={(event) => {
              handleClose();
              props.updateList(event, props.elementId);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default UpdateList;
