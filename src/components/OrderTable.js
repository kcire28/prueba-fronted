import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { formatToMmDdYyyy } from '../utils/DateUtils';
import { Link } from 'react-router-dom';

const OrderTable = ({ orders }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Shipping Promise</th>
          <th>Status</th>
          <th>Client</th>
          <th>Shipping Address</th>
          <th>Create Date</th>
          <th># items</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map((order) => (
          <tr key={order._id}>
            <td>{order._id}</td>
            <td>{formatToMmDdYyyy(new Date(order.shippingPromise))}</td>
            <td>{order.status}</td>
            <td>{order.client.name}</td>
            <td>{order.shippingAddress}</td>
            <td>{formatToMmDdYyyy(new Date(order.createDate))}</td>
            <td>{order.items.length}</td>
            <td>
              <Link to={`/order/${order._id}`}>
                  <Button>Detail</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTable;
