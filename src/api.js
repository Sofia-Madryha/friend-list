import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
    const response = await axios.get(
      `/users`
    );

    return response;
  };