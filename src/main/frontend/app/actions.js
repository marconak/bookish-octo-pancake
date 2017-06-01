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

export function addTodo(todo) {
  return axios.post('api/todos', todo).then(resp => {
    return resp.data;
  });
}

export function updateTodo(todo) {
  return axios.put(`api/todos/${todo.id}`, todo).then(resp => {
    return resp.data;
  });
}

export function deleteTodo(id) {
  return axios.delete(`api/todos/${id}`).then(resp => {
    return resp.data;
  });
}

export function getTodos(page, perPage) {
  return axios.get(`api/todos?page=${page}&perPage=${perPage}`).then(resp => {
    return resp.data;
  });
}
