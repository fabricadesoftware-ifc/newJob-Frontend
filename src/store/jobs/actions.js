import { jobsApi } from '@/services'

export const fetchJobs = async ({ dispatch }) => {
  return await jobsApi
    .fetchJobs()
    .then(response => dispatch('setJobs', response.data))
}