import api from './api'

class jobsApi {
  async getJobs() {
    try {
      const { data } = await api.get('endereco')
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new jobsApi()
