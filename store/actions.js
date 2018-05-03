import api from '~/api'

export const banner = async (store, params) => {
  return await api.get('/api/v1/get_banner', params)
}

export const categories = async (store, params) => {
  return await api.get('/japi/v1/categories', params)
}

export const recommend = async (store, params) => {
  return await api.get('/rapi/v1/get_recommended_entry', params)
}

export const entries = async (store, params) => {
  return await api.get('/tapi/v1/get_entry_by_rank', params)
}

export const getListByLastTime = async (store, params) => {
  return await api.get('/xapi/v1/getListByLastTime', params)
}
