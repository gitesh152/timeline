import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './index.css';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
  const [show, setShow] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onMouseOverFn = (e) => {
    setHovering(true);
  };
  const onMouseOutFn = (e) => {
    setHovering(false);
  };
  let cus = {
    // position: 'absolute',
    // top: '200%',
    // left: '0%',
    // backgroundColor: 'black',
    // borderRadius: '5px',
    // color: 'white',
    // padding: '4px',
    // width: '100px',
    // opacity: '0.3',
    // visibility: 'hidden',
    width: '200px',
    backgroundColor: 'rgb(250 40 61)',
    color: '#fff',
    textAlign: 'left',
    borderRadius: '6px',
    padding: '5px 0px',
    paddingLeft: '15px',
    position: 'absolute',
    top: '100%',
    left: '60px',
    marginLeft: '-60px',
    fontSize: '10px',
    fontFamily: 'verdana',
    zIndex: '2',
  };

  console.log(props);
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Button
          className="enquiry_class"
          style={{
            backgroundColor: props.bg,
            border: 'none',
            height: '45px',
            lineHeight: '100%',
          }}
          onClick={handleShow}
          onMouseOver={onMouseOverFn}
          onMouseOut={onMouseOutFn}
        >
          {props.title}
        </Button>
        {hovering && (
          <div style={cus}>
            Due Date : {props.dueDate}
            <br />
            Assigned To : {props.assignedTo}
            <br />
            Last Updated At : {props.lastUpdatedAt}
            <br />
            Last Updated By : {props.lastUpdatedBy}
            <br />
          </div>
        )}
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.imgSrc}
            style={{ width: '100%', height: '400px' }}
            alt="..."
            className="img-thumbnail"
          />
          <p>{props.describe}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

// render(<Example />);

export default Example;
