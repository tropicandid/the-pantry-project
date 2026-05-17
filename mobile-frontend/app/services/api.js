import axios from 'axios';
import Constants from 'expo-constants';

// Base URL of your Django API
const API_BASE_URL = 'http://192.168.1.2:8000/api/v1'; // UPDATE THIS LATER TO PULL FROM ENV CONSTANT INSTEAD

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Optional: add an auth token dynamically
// export const setAuthToken = (token) => {
//   if (token) {
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common['Authorization'];
//   }
// };


// Fetch all organizations
export const fetchOrganizations = async () => {
  try {
    const response = await api.get('/organization/');
    return response.data;
  } catch (error) {
    console.error('Error fetching organizations:', error.response || error.message);
    throw error;
  }
};

// Fetch single organization by ID
export const fetchOrganizationById = async (id) => {
  try {
    const response = await api.get(`/organization/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching organization ${id}:`, error.response || error.message);
    throw error;
  }
};

// Create a blog (example POST)
// export const createBlog = async (data) => {
//   try {
//     const response = await api.post('/blog/', data);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating blog:', error.response || error.message);
//     throw error;
//   }
// };

export default api;