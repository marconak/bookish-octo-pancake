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

export function getUser() {
  return axios.get('/api/user').then(resp => {
    return resp.data;
  });
}

export function logout() {
  return axios.post('/logout', {});
}
