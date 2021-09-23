// import api from './api'

class jobsApi {
  async fetchJobs() {
    try {
      const { data } = require('./jobs.json')
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new jobsApi()
