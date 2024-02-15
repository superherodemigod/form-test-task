// src/api.ts
import axios from 'axios';

const fetchFormBlocks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/form/blocks');
    return response.data;
  } catch (error) {
    console.error('Error fetching form blocks:', error);
    throw error;
  }
};

export default {
  fetchFormBlocks,
};