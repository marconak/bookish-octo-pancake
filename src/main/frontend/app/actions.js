import axios from 'axios';

export function login(name, pass) {
  const data = $.param({
    username: name,
    password: pass
  });

  return axios.post('/login', data, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });
}
