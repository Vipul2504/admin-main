import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Sidebar = () => {

    const router = useRouter()
    const [route, setRoute] = useState(router.pathname)

    useEffect(() => {
        setRoute(router.pathname)
    }, [router])

    return (
        <div className='fixed z-50 bg-white h-full w-2/12 border-r-2 border-black'>
            <div className='h-full w-full flex flex-col items-center justify-between'>
                <div>

                    <Image src="/logo.svg" height={200} width={200} alt='' />

                    <div className='w-full'>
                        <h1 className='my-2 font-bold text-gray-400'>MENU</h1>

                        <ul className=''>
                            <Link href='/dashboard' passHref>
                                <li className={` ${route === '/dashboard' ? "font-bold bg-black text-white" : "text-gray-400 font-semibold hover:bg-gray-100"}   text-base cursor-pointer  p-2 px-4`}>
                                    <i className="fas fa-th-large w-5"></i>
                                    &nbsp; Overview
                                </li>
                            </Link>
                            <Link href='/order' passHref>
                                <li className={` ${route === '/order' ? "font-bold bg-black text-white" : "text-gray-400 font-semibold hover:bg-gray-100"} text-base cursor-pointer  p-2 px-4`}>
                                    <i className="far fa-clipboard w-5"></i>
                                    &nbsp; Orders
                                </li>
                            </Link>
                            <Link href='/products' passHref>
                                <li className={` ${route === '/products' ? "font-bold bg-black text-white" : "text-gray-400 font-semibold hover:bg-gray-100"} text-base cursor-pointer p-2 px-4`}>
                                    <i className="fas fa-shopping-bag w-5"></i>
                                    &nbsp; Products
                                </li>
                            </Link>

                            <Link href='/users' passHref>
                                <li className={` ${route === '/users' ? "font-bold bg-black text-white" : "text-gray-400 font-semibold hover:bg-gray-100"} text-base cursor-pointer p-2 px-4`}>
                                    <i className="fas fa-user    w-5"></i>
                                    &nbsp; Users
                                </li>
                            </Link>
                        </ul>

                        <h1 className=' my-4 font-bold text-gray-400'>BUSINESS</h1>

                        <ul className='mt-4'>
                            <li className={`font-semibold text-gray-400 text-base cursor-pointer hover:bg-gray-100  p-2 px-4`}>
                                <i className="fas fa-truck w-6"></i>
                                &nbsp; Shipment
                            </li>
                            <li className={`font-semibold text-gray-400 text-base cursor-pointer hover:bg-gray-100  p-2 px-4`}>
                                <i className="fas fa-user w-6"></i>
                                &nbsp; Users
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='w-10/12 mb-4'>
                    <h1 className='font-bold'>Furnito. 2022</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
