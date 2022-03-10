import api from './api'

class jobsApi {
  async getJobs() {
    try {
      const { data } = await api.get('job/')
      const jobs = await [...data]
      return Promise.resolve(jobs)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getJob(id) {
    try {
      const { data } = await api.get(`job/${id}/`)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new jobsApi()
