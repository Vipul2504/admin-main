import React from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import Loader from '../../components/Loader'
import { useAutoLogin } from '../../hooks/useAutoLogin'
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {

    const router = useRouter()
    const check = router.pathname === '/'
    const { loading } = useAutoLogin()

    return (
        loading ? <Loader /> :
            <>
                {
                    <div className="flex min-h-screen">
                        {
                            check ? "" : <div className='w-2/12'>
                                <Sidebar />
                            </div>
                        }
                        <div className={`w-full ${check ? "w-full" : "w-10/12"}`}>
                            {children}
                        </div>
                        <Toaster />
                    </div>
                }
            </>

    )
}

export default Layout
