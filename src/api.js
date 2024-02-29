import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
    const response = await axios.get(
      `/users`
    );

    return response;
  };

  export const fetchPosts = async(currentPage, postsPerPage)=>{
    const response = await axios.get(
      `/posts?_page=${currentPage}&_per_page=${postsPerPage}&_limit=${postsPerPage}`
    )
    return response;
  }