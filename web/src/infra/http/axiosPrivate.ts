import axios from "axios";

export const axiosPrivate = axios.create({
  withCredentials: true
})

axiosPrivate.interceptors.request.use(config => {
  if (!config.headers['Authorization']) {
    const token = localStorage.getItem('acessToken')
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

axiosPrivate.interceptors.response.use(response => response, async (error) => {
  const prevRequest = error.config
  if (error.status === 401 && !prevRequest.sent) {
    prevRequest.sent = true
    const response = await axios.get('/sessions/refresh', { withCredentials: true })
    if (!response.data.token) {
      return Promise.reject(error)
    }
    prevRequest.headers['Authorization'] = `Bearer ${response.data.token}`
    localStorage.setItem('acessToken', response.data.token)
    return axiosPrivate(prevRequest)
  }
  return Promise.reject(error)
})