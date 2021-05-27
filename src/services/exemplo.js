import axios from 'axios'

class jobsApi {
  async getJobs() {
    try {
      const { data } = await axios.get('endereco')
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new jobsApi()
