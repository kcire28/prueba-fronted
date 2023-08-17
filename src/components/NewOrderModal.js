import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewOrderModal = ({ show, onHide, clients, items, onSave }) => {
  const [createDate, setCreateDate] = useState('');
  const [client, setClient] = useState('');
  const [status, setStatus] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingPromise, setShippingPromise] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);


  const handleItemCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleSave = () => {
    const orderData = {
      createDate,
      client,
      status: 'Approve',
      shippingAddress,
      shippingPromise,
      items: selectedItems,
    };
    //console.log("saveee thiss", orderData)
    onSave(orderData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title algin="center">New Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <Form.Group controlId="formClient">
            <Form.Label>Client</Form.Label>
            <Form.Control as="select" value={client} onChange={(e) => setClient(e.target.value)}>
              <option value="">Select a client...</option>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Approve">Approve</option>
              <option value="Cancel">Cancel</option>
              <option value="Delivery">Delivery</option>
              <option value="Traveling">Traveling</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formItems">
            <Form.Label>Items</Form.Label>
            {items.map((item) => (
              <Form.Check
                key={item._id}
                type="checkbox"
                label={item.title}
                checked={selectedItems.includes(item._id)}
                onChange={() => handleItemCheckboxChange(item._id)}
              />
            ))}
          </Form.Group>
          <Form.Group controlId="formShippingAddress">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formShippingPromise">
            <Form.Label>Shipping Promise</Form.Label>
            <Form.Control
              type="datetime-local"
              value={shippingPromise}
              onChange={(e) => setShippingPromise(e.target.value)}
            />
          </Form.Group>
          {/* Add input fields for other data, like selected items */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewOrderModal;
