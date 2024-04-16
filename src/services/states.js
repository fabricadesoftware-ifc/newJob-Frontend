import { api } from '@/plugins/axios';
class StateService{
    async getAllServices(){
        const response = await api.get('state/')
        return response.data
    }
}

export default new StateService()