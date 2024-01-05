import axios from 'axios'

const API = axios.create({
  baseURL: 'https://technical.test.talenavi.com/api',
})

export default API
