import tokenApi from '@/services/tokenApi'

export const setHeaderToken = token => tokenApi.setBearerToken(token)

export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')
export const setLocalToken = token => localStorage.setItem('token', token)
