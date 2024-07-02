import { api } from '@/plugins/axios';

class JobService {
    async getAllJobs(){
        const response = await api.get('job/')
        return response.data
    }
    async deleteJob(id){
        const response = await api.delete(`job/${id}`)
        return response.data
    }
    async createJob(jobData){
        const response = await api.post(`job/`, jobData)
        return response.data
    }
    async updateJob(id, jobData){
        const response = await api.put(`job/${id}`, jobData)
        return response.data
    }
}

export default new JobService()