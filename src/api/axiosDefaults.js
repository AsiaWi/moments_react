import axios from 'axios';

axios.defaults.baseURL = 'https://moments-react-asia-493c23a37d81.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;