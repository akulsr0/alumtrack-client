import axios from 'axios';

const request = (options, cb) => {
  const { url, method = 'GET', data, headers } = options;
  axios({ url, method, data, headers })
    .then((res) => cb(null, res.data))
    .catch((err) => console.error(err));
};

const APIService = { request };
export default APIService;
