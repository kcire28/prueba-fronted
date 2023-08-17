import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Container , Row, Button, Col } from 'react-bootstrap';
import { formatToMmDdYyyy } from '../utils/DateUtils';
import  { fetchOrderById } from '../services/api';


const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetchOrderById(id)
      .then((data) => {
        setOrder(data);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (

    <Container>
        <br></br>
        <Row>
            <h2>Order Detail</h2>
            <br></br>
            </Row>
        <Row>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{order._id}</td>
          </tr>
          <tr>
            <th>Create Date</th>
            <td>{formatToMmDdYyyy(new Date(order.createDate))}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{order.status}</td>
          </tr>
          <tr>
            <th>Client</th>
            <td>{order.client.name}</td>
          </tr>
          <tr>
            <th>Shipping Address</th>
            <td>{order.shippingAddress}</td>
          </tr>
          <tr>
            <th>Shipping Promise</th>
            <td>{formatToMmDdYyyy(new Date(order.shippingPromise))}</td>
          </tr>
        </tbody>
      </Table>
      <h3>Items</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>URL</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.url}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
        </Row>
        
    </Container>

  );
};

export default OrderDetail;
