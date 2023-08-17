import React, { useState, useEffect } from 'react';
import { fetchTravelingOrders, fetchExpiringOrders } from '../services/api';
import { Tabs, Tab, Container , Row, Button, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import OrderTable from './OrderTable';


const Report = () => {
  const [orders, setOrders] = useState([]);
  const [travelingOrders, setTravelingOrders] = useState([]);
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), 5, 1));
  const [endDate, setEndDate] = useState(new Date(new Date().getFullYear(), 5, 30));

  const handleSearch = () => {
    if (startDate && endDate) {
        console.log(startDate);
        const formattedStartDate = startDate;
        const formattedEndDate = endDate;
      fetchTravelingOrders(formattedStartDate, formattedEndDate)
        .then((data) => {
          setTravelingOrders(data);
        })
        .catch((error) => {
          console.error("Error fetching traveling orders:", error);
        });
    }
  };

  useEffect(() => {
    fetchExpiringOrders()
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });

      handleSearch();
  }, []);

  

  return (
    <Container>
    <Row>
    <div>
        <br></br>
      <h2>Reports</h2>
      <Tabs defaultActiveKey="allOrders" id="orderTabs">
        <Tab eventKey="allOrders" title="Expires soon">
            <br></br>
            <p>3. Disponibilizar un reporte que permita recuperar todas las órdenes en estado Approve y
            falte menos de 2 días para incumplir con la promesa de entrega (ShippingPromise)..</p>
            <br></br>
            <OrderTable orders={orders} />
        </Tab>
        <Tab eventKey="approvedOrders" title="Traveling Orders">
            <br></br>
            <p>4. Implementar un reporte con todas las órdenes en estado Traveling entre un rango de
            fecha dado por parámetro.</p>
            <br></br>
            <Row>
              <Col  xs={6}>
              </Col>
                  <Col>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                      />
                  </Col>

                  <Col>
                      <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="End Date"
                    />
                  </Col>

                  <Col  xs={2}>
                    <Button onClick={handleSearch}>Search</Button>
                  </Col>
            </Row>
            <div>

          </div>
          <br></br>
           <OrderTable orders={travelingOrders} /> 
        </Tab>
      </Tabs>
    </div>
        </Row>
        </Container>

  );
};

export default Report;
