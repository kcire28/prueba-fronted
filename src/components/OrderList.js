import React, { useState, useEffect } from 'react';
import  { fetchOrders, fetchClients, fetchItems, createOrder  } from '../services/api';
import { Button } from 'react-bootstrap';
import OrderTable from './OrderTable';
import NewOrderModal from './NewOrderModal';


const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [items, setItems] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const handleSaveOrder = (orderData) => {

    createOrder(orderData)
      .then((response) => {
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
      
  };

  useEffect(() => {
    fetchOrders()
      .then((response) => {
        setOrders(response);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });

      fetchClients()
      .then((response) => {
        setClients(response);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });

      fetchItems()
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  return (
    <div>
        <div className='container'>
            <br></br>
            <h2>Order List</h2>
            <br></br>
            
            <div align="right">
                
            <Button variant="success" onClick={() => setShowModal(true)}>
              New order
            </Button>
          
          <NewOrderModal
            show={showModal}
            onHide={() => setShowModal(false)}
            clients={clients}
            items={items}
            onSave={handleSaveOrder}
          />   
            </div>
            <hr></hr>
            <OrderTable orders={orders} /> 
        </div>
    </div>
  );
};

export default OrderList;
