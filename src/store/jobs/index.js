import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const jobs = {
    getters,
    state,
    actions,
    mutations,
    namespaced: true
}

export { jobs }
