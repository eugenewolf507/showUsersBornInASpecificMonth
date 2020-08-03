import axios from 'axios';

const fetchUsers = () => {
  return axios
    .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then(response => response.data);
};

export default { fetchUsers };
