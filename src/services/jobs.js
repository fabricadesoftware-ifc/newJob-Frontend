import { api } from '@/plugins/axios';

class JobService {
    async getAllJobs(){
        const response = await api.get('job/')
        return response.data
    }
    async deleteJob(){
        const response = await api.delete('job;:id')
        return response.data
    }
}

export default new JobService()