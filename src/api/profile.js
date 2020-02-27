// may return empty object if nothing in localStorage#registerData
// returns Promise<{ first_name: string, last_name: string, email: string }>
export async function getProfileData(callback) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem('registerData')));
      }, 2000);
  });
}

export async function updateUser(user) {
  localStorage.setItem('registerData', JSON.stringify(user));
}
