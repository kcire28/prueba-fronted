import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
});


export const fetchOrders = () => {
  return axios.get(`${API_BASE_URL}/orders`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching orders:", error);
      throw error; 
    });
};

export const fetchOrderById = (id) => {
  return axios.get(`${API_BASE_URL}/orders/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching order:", error);
      throw error;
    });
};

export const fetchTravelingOrders = (startDate, endDate) => {
  const formattedStartDate = encodeURIComponent(startDate);
  const formattedEndDate = encodeURIComponent(endDate);
  
  return axios.get(`${API_BASE_URL}/orders/traveling?start=${formattedStartDate}&end=${formattedEndDate}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching traveling orders:", error);
      throw error;
    });
};

export const fetchExpiringOrders = () => {
  return axios.get(`${API_BASE_URL}/orders/expiresSoon`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching expiring orders:", error);
      throw error;
    });
};


export const fetchClients = () => {
  return axios.get(`${API_BASE_URL}/clients`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching clients:", error);
      throw error; 
    });
};

export const fetchItems = () => {
  return axios.get(`${API_BASE_URL}/items`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching items:", error);
      throw error; 
    });
};

export const createOrder = (orderData) => {
  return axios.post(`${API_BASE_URL}/orders`, orderData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating order:", error);
      throw error;
    });
};

export default api;
