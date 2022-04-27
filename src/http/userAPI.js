import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import {json} from "caniuse-lite/data/features";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/admin/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/admin/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/admin/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getUser = async (id) => {
    const {data} = await $authHost.get('api/admin/auth', {id})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}