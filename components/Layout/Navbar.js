import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../services/api'
import { setAuth } from '../../redux/authSlice'

const Navbar = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='fixed z-0 left-0 top-0 px-6 flex justify-end items-center w-full bg-white h-16 border-b-2 border-black'>
            <h1 className='text-right'>vipulvishwakarma521@gmail.com</h1>
            <h1 className='uppercase font-bold ml-4 hover:underline cursor-pointer' onClick={handleLogout}>Logout</h1>
        </div>
    )
}

export default Navbar
