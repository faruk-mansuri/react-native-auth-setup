import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'https://react-native-chatapp.onrender.com/api/v1',
});
