import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }

})

// LIST
export const getAllProducts = () => api.get('/api/products')
export const addProducts = (data) => api.post('/api/products', data)
export const SendOtp = (data) => api.post('/api/send-otp', data)
export const VerifyOtp = (data) => api.post('/api/verify-otp', data)
export const VerifyAdminOtp = (data) => api.post('/api/verify-admin-otp', data)
export const logout = () => api.post('/api/logout')


export const GetAllUsers = () => api.get('/api/users')
export const GetAllOrders = () => api.get('/api/orders')
export const GetOrderDetail = (id) => api.get(`/api/order/${id}`)
export const UpdateOrderStatus = (id, data) => api.post(`/api/order-status/${id}`, data)
export const GetStats = () => api.get('/api/stats')


api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/refresh`, {
                withCredentials: true
            })
            return api.request(originalRequest)
        } catch (err) {
            console.log(err)
        }
    }
    throw error
})

export default api