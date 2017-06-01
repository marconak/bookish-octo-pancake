const TOKEN_KEY = 'auth-token';
const HEADERS_KEY = 'x-auth-token';
function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export default {
  setToken: setToken,
  getToken: getToken,
  deleteToken: deleteToken,
  HEADERS_KEY: HEADERS_KEY
};
