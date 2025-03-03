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
  return Promise.resolve(error.response || { status: 500, data: { message: 'UnexpectedError' } })
})

axiosPrivate.interceptors.response.use(response => response, async (error) => {
  const prevRequest = error.config
  if (error.response.status === 401 && !prevRequest.sent) {
    prevRequest.sent = true
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/sessions/refresh`, { withCredentials: true })
    if (!response.data.token) {
      return Promise.resolve('Refresh token failed')
    }
    const newConfig = { ...prevRequest }
    prevRequest.headers['Authorization'] = `Bearer ${response.data.token}`
    localStorage.setItem('acessToken', response.data.token)
    return axiosPrivate(newConfig)
  }
  return Promise.resolve('A requisição para o refreshToken falhou, o usuário não está autenticado.')
})