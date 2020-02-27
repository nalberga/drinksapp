export async function registerUser(user) {
  localStorage.setItem('registerData', JSON.stringify(user));
}
