import api from './api'

class profileApi {
  async getProfile(payload) {
    try {
      const { data } = await api.get('v1/accounts/profile/', {
        headers: {
          Authorization: `Bearer ${payload}`
        }
      })
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async putProfile(payload) {
    try {
      const { data } = await api.put('v1/accounts/profile/', payload)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new profileApi()
