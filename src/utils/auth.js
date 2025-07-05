export function isLoggedIn() {
  return localStorage.getItem('is_logged_in') === 'true';
}

export function login() {
  localStorage.setItem('is_logged_in', 'true');
}

export function logout() {
  localStorage.removeItem('is_logged_in');
}