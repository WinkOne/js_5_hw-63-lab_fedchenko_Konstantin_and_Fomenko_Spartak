import  axios from 'axios';
 const  axiosApi = axios.create({
    baseURL: 'https://posts-34b50.firebaseio.com/'
});
 export default axiosApi;