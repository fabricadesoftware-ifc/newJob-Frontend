import api from './api'
class fileApi {
  async postFile(payload) {
    try {
      const { data } = await api.get('v1/files/images/', payload)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new fileApi()
