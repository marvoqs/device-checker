import axios from 'axios';

const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Auth-Token'] = token;
  } else {
    delete axios.defaults.headers.common['Auth-Token'];
  }
};

export default setAuthToken;
