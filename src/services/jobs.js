import axios from "axios";

class JobService {
    async getAllJobs(){
        const response = await axios.get('job')
        return response.data
    }
    async deleteJob(id){
        const response = await axios.delete(`job/${id}`)
        return response.data
    }
    async createJob(jobData){
        const response = await axios.post(`job`, jobData)
        return response.data
    }
    async updateJob(id, jobData){
        const response = await axios.put(`job/${id}`, jobData)
        return response.data
    }
}

export default new JobService()