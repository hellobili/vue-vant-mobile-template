import axios from 'axios'
import store from '@/store'
// import { getToken } from '@/utils/auth'
import qs from 'qs'
import router from '@/router'

// 创建实例
const service = axios.create({
    baseURL:''
    timeout: 5000 * 2,
})

const token = localStorage.getItem('token')
    // 请求拦截器
service.interceptors.request.use(
    config => {
        if (token) {
            config.headers['token'] = token
        }
        // if (config.typeFormData) {
        //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        //     config.data = qs.stringify(config.data)
        // }
        return config
    }, error => {
        Message.error('请求错误')
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== '200') {
            // 错误提示
            if (res.code === '40101') {
                // 未登录提示
                setTimeout(() => {
                    store.dispatch('user/resetToken').then(() => {
                        // location.reload()
                        router.replace('/login')
                    })
                }, 1000)
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    }, error => {
        const { config, code, message } = error
        if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时
            Message.error('请求超时，请稍后重试')
                // console.warn(`请求超时，将在2秒后重试`)
                // return new Promise(resolve => {
                //     setTimeout(async _ => {
                //         resolve(await httpClient.request(config))
                //         }, defaultConfig.retryDelay) // 设置发送间隔
                //     })
        }
        return Promise.reject(error)
    }
)

export default service