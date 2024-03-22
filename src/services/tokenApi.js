import api from './api'
class tokenApi {
  async postToken(form) {
    try {
      const response = await api.post('token/', {
        username: form.email,
        password: form.password
      })
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async refreshToken(token) {
    try {
      const { data } = await api.post('token/refresh/', {
        refresh: token
      })
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async setBearerToken(token) {
    try {
      const { data } = (api.defaults.headers[
        'Authorization'
      ] = `Bearer ${token}`)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new tokenApi()
