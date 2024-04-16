import { api } from '@/plugins/axios';

class JobService {
    async getAllJobs(){
        const response = await api.get('job/')
        return response.data
    }
}

export default new JobService()