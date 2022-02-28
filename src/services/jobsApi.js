import api from './api'

class jobsApi {
  async getJobs() {
    try {
      const { data } = await api.get('job/')

      const jobs = await [...data]
      Promise.resolve(data)
      return jobs
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new jobsApi()
