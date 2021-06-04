import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/'
})

export default api

// const APITokenPost = async form =>
//   await api.post('token/', {
//     email: form.email,
//     password: form.password
//   })

// const APITokenRefresh = async token => {
//   await api.post('token/refresh/', {
//     refresh: token
//   })
// }

// const setBearerToken = token => {
//   api.defaults.headers['Authorization'] = `Bearer ${token}`
// }

// const APIProfileGet = async payload =>
//   await api.get('v1/accounts/profile/', {
//     headers: {
//       Authorization: `Bearer ${payload}`
//     }
//   })

// const APIProfilePut = async payload => {
//   await api.put('v1/accounts/profile/', payload)
// }

// const APIFilePost = async payload => {
//   await api.get('v1/files/images/', payload)
// }

// export {
//   api,
//   setBearerToken,
//   APITokenPost,
//   APIProfileGet,
//   APITokenRefresh,
//   APIFilePost,
//   APIProfilePut
// }
