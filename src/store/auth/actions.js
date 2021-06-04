import * as types from './mutation-types'
import * as storage from '@/store/storage'
import { jobsApi, profileApi, tokenApi } from '@/services'

export const ActionSetUser = async ({ commit }, payload) => {
  commit(types.SET_USER, payload)

  //  SOMENTE DE TESTE-EXEMPLO - Eduardotry {
    const jobs = await jobsApi.getJobs()
    return Promise.resolve(jobs)
  } catch (error) {
    return Promise.reject(error)
  }

}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    console.log('tem token')
  }
  console.log(state.token)
  const token = storage.getLocalToken()

  if (!token) {
    return new Error('Token Inválido')
  }

  dispatch('ActionSetToken', token)
}

export const ActionLoadSession = async ({ dispatch }) => {
  try {
    const response = await profileApi.getProfile(localStorage.getItem('token'))
    console.log(response)
    dispatch('ActionSetUser', response.data)
  } catch (e) {
    dispatch('ActionSignOut')
    console.log(e)
  }
}

export const ActionDoLogin = async ({ dispatch }, payload) => {
  return await tokenApi
    .postToken(payload)
    .then(response => dispatch('ActionSetToken', response.data.access))
}

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken('')
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}
