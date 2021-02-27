import * as types from './mutation-types'
import api from '@/services/api'

export const ActionSetUser = async ({ commit }, payload) => {
  commit(types.SET_USER, payload)
  return await api.post('token/', {
    email: payload.email,
    password: payload.password
  })
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
}

export const ActionLogIn = ({ dispatch }, payload) => {
  return api
    .post('token/', {
      email: payload.email,
      password: payload.password
    })
    .then(response => dispatch('ActionSetToken', response.data.access))
}
